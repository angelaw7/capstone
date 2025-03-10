import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..')))

from server.imageProcessing.process import ImageProcessor

processor = ImageProcessor()

def _test_parse_image(receipt_filename: str):
    output_filename = receipt_filename + ".output.csv"
    receipt, data = processor._parse_image(receipt_filename)
    data = data[["name", "price"]]
    with open(output_filename, "w") as f:
        f.write(data.to_csv())


def test_parse_images():
    image_path = "./data/parsing"
    files = os.listdir(image_path)
    for file in files:
        if not file.endswith(".csv"):
            _test_parse_image(os.path.join(image_path, file))

