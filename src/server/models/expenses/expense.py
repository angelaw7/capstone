class Expense:
    def __init__(self, name, date, price,category):
        self.name = name
        self.date = date
        self.price = price
        self.category = category

    def to_dict(self):
        return {
            "name": self.name,
            "date": self.date,
            "price": self.price,
            "category": self.category
        }
    