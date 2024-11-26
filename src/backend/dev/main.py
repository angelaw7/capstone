from PIL import Image, ImageEnhance, ImageFilter
import pandas as pd
import pytesseract
import numpy as np

import categorization
import utils


pytesseract.pytesseract.tesseract_cmd = (
    r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)
pd.set_option("display.max_rows", None)


def extract_text_from_image(filename: str, show_image: bool = False):
    image = Image.open(filename)
    image = image.convert("L")  # convert to greyscale
    enhancer = ImageEnhance.Contrast(image)
    image = enhancer.enhance(2)

    image = image.filter(ImageFilter.MedianFilter())
    if show_image:
        image.show()
    image_arr = np.array(image)

    text = pytesseract.image_to_string(image_arr, config="--psm 4")

    data = pytesseract.image_to_data(
        image_arr, output_type=pytesseract.Output.DICT
    )
    print(pd.DataFrame(data).query("conf > 0"))
    print(text)
    return text.split("\n")


def process_items_list(text_arr: list) -> tuple:
    subtotal = 0

    items = []
    curr_item = None
    for i, line in enumerate(text_arr):
        if "subtotal" in line.lower():
            subtotal = line.split(" ")[-1]
            break
        if line != "":
            line_arr = line.split(" ")
            if line_arr[0] == "Saving":
                items[-1].append(line)
                continue
            if "points" in line.lower():
                continue
            if not curr_item:
                curr_item = line
            else:
                curr_item += " " + line
            if utils.is_float(line_arr[-1]) or (
                len(line_arr) > 2 and utils.is_float(line_arr[-2])
            ):
                items.append([curr_item])
                curr_item = None
    calculated_total = 0
    for item in items:
        item_name, item_price = utils.split_item(item[0])
        if item_price:
            calculated_total += item_price

    return items, subtotal, calculated_total


def jsonify_data(items: list, filename: str, write_to_file: bool = True):
    items_cleaned = []
    with open(f"{filename}_results.csv", "w+") as f:
        for item in items:
            item_name, item_price = utils.split_item(item[0])
            if item_name:
                items_cleaned.append([item_name, item_price])
                f.write(item_name + "\n")
            else:
                print("**error with item", item[0])
    return pd.DataFrame(items_cleaned, columns=["name", "price"])


def main():
    filename = "./data/costco_1.jpg"
    text_arr = extract_text_from_image(filename, show_image=False)
    items, subtotal, calculated_total = process_items_list(text_arr)
    data = jsonify_data(items, filename)
    print("DATA")
    print(data)
    print("DATA---")

    categorized_data = categorization.categorize(data)
    print(categorized_data)


if __name__ == "__main__":
    main()
