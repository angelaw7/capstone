from server.daos.incomes.incomes_dao import IncomesDao
from flask import jsonify

class IncomesController:
    @staticmethod
    def get_all_incomes(userEmail):
        return IncomesDao.get_all_user_incomes(userEmail)

    @staticmethod
    def create_income(data):
        # Add logic to create income (probs from the image or manual input)
        return IncomesDao.create_income(data.json)
    
    @staticmethod
    def update_income(incomeId, updatedData):
        return IncomesDao.update_income(incomeId, updatedData)
    
    @staticmethod
    def delete_income(incomeId):
        return IncomesDao.delete_income(incomeId)