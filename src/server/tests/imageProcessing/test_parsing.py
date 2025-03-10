import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..')))

from server.imageProcessing.process import ImageProcessor

processor = ImageProcessor()
IMAGE_PATH = "./data/parsing"


def _test_parse_image(receipt_filepath: str, filename: str):
    output_filename = os.path.join(IMAGE_PATH, "output", filename + ".output.csv")
    receipt, data = processor._parse_image(receipt_filepath)
    data = data[["name", "price"]]
    with open(output_filename, "w") as f:
        f.write(data.to_csv())


def test_parse_images():
    image_path = os.path.join(IMAGE_PATH, "input")
    files = os.listdir(image_path)
    for file in files:
        _test_parse_image(os.path.join(image_path, file), file)

