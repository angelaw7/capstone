from server.daos.expenses.expenses_dao import ExpensesDao
from flask import jsonify

class ExpensesController:
    @staticmethod
    def get_all_expenses(userId):
        return ExpensesDao.get_all_user_expenses(userId)

    @staticmethod
    def create_expense(data):
        if 'files' in data:
            if 'receipt' not in data.files:
                return jsonify({"error": "No receipt file provided"}), 400
            
            return ExpensesDao.process_receipt(data.files['receipt'])
        
        if type(data) is list:
            return ExpensesDao.bulk_create_expenses(data) 
        else:
            return ExpensesDao.create_expense(data)
    

    @staticmethod
    def update_expense(data, expenseId):
        return ExpensesDao.update_expense(data.json, expenseId)
        
    @staticmethod
    def delete_expense(expenseId):
        return ExpensesDao.delete_expense(expenseId)
