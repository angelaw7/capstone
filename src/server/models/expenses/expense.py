class Expense:
    def __init__(self, name, cost, category, transaction_date, email):
        self.name = name
        self.transaction_date = transaction_date
        self.cost = cost
        self.category = category
        self.email = email

    def to_dict(self):
        return  {
            "name": self.name,
            "cost": self.cost,
            "category": self.category,
            "transaction_date": self.transaction_date,
            "email": self.email
        }
