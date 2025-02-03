from server.models.expenses.expense import Expense
from server.imageProcessing import ImageProcessor
from server.db import db

import os

base_path = os.path.dirname(os.path.abspath(__file__))
tmp_path = os.path.join(base_path, "tmp")

image_processor = ImageProcessor()

class ExpensesDao:
    @staticmethod
    def get_all_user_expenses(userId):
        try:
            expenses = db.table("expenses") \
                .select("*, users(*)") \
                .eq("users.userid", userId) \
                .order("transaction_date", desc=True) \
                .execute()


            if "error" in expenses and expenses["error"]:
                raise Exception(f"Supabase Query Error: {expenses['error']}")

        except Exception as e:
            print(f"Unexpected Error: {e}")
        
        return expenses.data

    @staticmethod
    def create_expense(data):
        expense_data = Expense(
            raw_name=data['raw_name'], 
            name=data['name'], 
            transaction_date=data['transaction_date'], 
            cost=data['cost'], 
            category=data['category'],
            email=data['email']
        )
        new_expense = db.table("expenses") \
            .insert(expense_data.to_dict()) \
            .execute()
        return new_expense.data

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
        return data