import re
import calendar
import Levenshtein as lev


def is_float(value):
    value = value.strip()

    # handle negative signs
    if value.startswith("-"):
        value = value[1:]

    # remove decimal point for digit check
    if "." in value:
        value = value.replace(".", "", 1)
    # remove dollar sign
    if "$" in value:
        value = value.replace("$", "", 1)

    return value.isdigit()


def split_item(item: str, verbose=False):
    """
    (tries to) split a string into item name and price
    """
    pattern = r"(.+?)\s((\$)?\d+[\s\.]\d{2})"
    match = re.search(pattern, item)

    if match:
        item_name = match.group(1)
        if match.group(2).startswith("$"):
            price = float(match.group(2)[1:].replace(" ", "."))
        else:
            price = float(match.group(2).replace(" ", "."))

        return item_name, price
    else:
        if verbose:
            print("No match found.", item)
        return None, 0

list_months = list(calendar.month_abbr)[1:]

def parse_date(text: str):
    """
    Parse a date from a string
    """
    for month in list_months:
        if month.lower() in text.lower()[:3]:
            return True
    return False
