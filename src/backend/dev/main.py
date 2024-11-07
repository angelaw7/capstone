from PIL import Image, ImageEnhance, ImageFilter
import pytesseract
import numpy as np
import re

pytesseract.pytesseract.tesseract_cmd = (
    r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)

filename = "IMG_7959.jpg"
image = Image.open(filename)
image = image.convert("L")
enhancer = ImageEnhance.Contrast(image)
image = enhancer.enhance(2)

image = image.filter(ImageFilter.MedianFilter())
image = image.point(lambda p: p > 128 and 255)
image.show()
image_arr = np.array(image)

text = pytesseract.image_to_string(image_arr)
text_arr = text.split("\n")

items = []
flag1 = False
flag2 = False
subtotal = 0
tax = 0
total = 0

for i, line in enumerate(text_arr):
    if "Member" in line:
        flag1 = True
    if "SUBTOTAL" in line:
        flag2 = True
        subtotal = line.split(" ")[-1]
    if flag1 and not flag2:
        line_arr = line.split(" ")
        if len(line_arr) >= 3:
            if line_arr[0].isdigit():
                if "TPD/" in line:
                    items[-1].append(line)
                else:
                    items.append([line])


def split_item(item):
    pattern = r"(\d+)\s(.+?)\s(\d+\.\d{2})"
    match = re.search(pattern, item)

    if match:
        # item_id = int(match.group(1))
        item_name = match.group(2)
        price = float(match.group(3))

        return item_name, price
    else:
        # print("No match found.")
        return None, 0


total = 0
discount = 0

print(f"{'Item Name': <20} {'Price': >10}")
for item in items:
    item_name, item_price = split_item(item[0])
    total += item_price
    print_item = f"{item_name: <20} {item_price: >10.2f}"

    if len(item) == 2:
        _, sale = split_item(item[1])
        discount += sale
        print_item += f"\t(-{sale: .2f})"

    print(print_item)

print("-------------------")
print(f"{'Calculated TOTAL': <20} {total: >10.2f}")
print(f"{'Calculated DISCOUNT': <20} {discount: >10.2f}")
print(f"{'Calculated SUBTOTAL': <20} {total - discount: >10.2f}")
print(f"{'Number of items': <20} {len(items): >10}")
print(f"{'Actual subtotal': <20} {subtotal: >10}")
