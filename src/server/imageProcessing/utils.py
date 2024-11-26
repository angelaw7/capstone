import re


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


def split_item(item: str, has_id=False):
    pattern = r"(.+?)\s((\$)?\d+\.\d{2})"
    match = re.search(pattern, item)

    if match:
        # item_id = int(match.group(1))
        item_name = match.group(1)
        if match.group(2).startswith("$"):
            price = float(match.group(2)[1:])
        else:
            price = float(match.group(2))

        return item_name, price
    else:
        print("No match found.", item)
        return None, 0
