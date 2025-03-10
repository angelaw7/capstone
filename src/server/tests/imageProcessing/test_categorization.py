import pytest
import sys
import os
import pandas as pd

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

from server.imageProcessing.categorization import Categorizer

categorizer = Categorizer()

def test_categorization():
    with open("./data/categorization/receipt_items_input.csv", "r") as f:
        items = pd.read_csv(f)
    output = categorizer.categorize(items=items)
    with open("./data/categorization/receipt_items_output.csv", "w") as f:
        f.write(output.to_csv(index=False))
