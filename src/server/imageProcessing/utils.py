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


def split_item(item: str, has_id=False):
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
        print("No match found.", item)
        return None, 0

list_months = list(calendar.month_abbr)[1:]

def parse_date(text: str):
    """
    Parse a date from a string
    """
    for month in list_months:
        if month.lower() in text.lower()[:3]:
            print("DATE", text)
            return True
    return False
    # pattern = r'\s*([a-zA-Z]{3,4})?\s*(\d{1,2})?\s*(\d{4})?\s*(\d{1,2}:\d{2})?\s*'
    # match = re.match(pattern, text.strip())
    # if match:
    #     if sum(1 for group in match.groups() if group) < 3:
    #         return None
    #     month_str, day, year, time_str = match.groups()
    #     try:
    #         month = list(calendar.month_abbr).index(month_str[:3]) if month_str else 1
    #     except:
    #         month = 1
    #     day = int(day) if day else 1
    #     year = int(year) if year else datetime.datetime.now().year
    #     if time_str:
    #         hour, minute = map(int, time_str.split(':'))
    #         if hour < 24 and minute < 60:
    #             time = datetime.time(hour, minute)
    #         else:
    #             time = datetime.time(0, 0)
    #     else:
    #         time = datetime.time(0, 0)

    #     print(datetime.datetime(year, month, day, time.hour, time.minute))