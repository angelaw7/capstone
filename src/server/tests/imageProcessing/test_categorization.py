import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

from imageProcessing import categorization

categorizer = categorization.Categorizer()

def test_categorization():
    pass