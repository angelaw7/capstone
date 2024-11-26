from server.models.expenses.expense import Expense

class ExpensesDao:
    @staticmethod
    def get_all_user_expenses(userId):
        # TODO: implement logic to get expenses for given users
        return [
            {"id": 1, "name": "Milk", "date": "2024-11-01", "price": "$4.00", "category": "Groceries"},
            {"id": 2, "name": "Cheese", "date": "2024-11-01", "price": "$2.00", "category": "Groceries"}
        ]

    @staticmethod
    def create_expense(data):
        new_expense = Expense(name=data['name'], date=data['date'], price=data['price'], category=data['category'])
        # TODO: add expense data to db and adjust return logic 
        return {"id": 3, "name": new_expense.name, "price": new_expense.price, "date": new_expense.date, "category": new_expense.category}
