from server.models.expenses.expense import Expense
from server.imageProcessing import ImageProcessor

import os
import json

base_path = os.path.dirname(os.path.abspath(__file__))
tmp_path = os.path.join(base_path, "tmp")

image_processor = ImageProcessor()

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

    @staticmethod
    def process_receipt(file):
        try:
            tmp_filepath = os.path.join(tmp_path, file.filename)
            file.save(tmp_filepath)
            
            print(f'Temporary file saved at: {tmp_filepath}')
            data = image_processor.process_image(tmp_filepath)
            # TODO(ang): remove the temp file (keep it for now for debugging)

        except Exception as e:
            print(e)
            return {"error": "Error processing receipt"}
        return data.to_dict()
