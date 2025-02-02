from server.models.incomes.income import Income
from server.db import db

class IncomesDao:
    @staticmethod
    def get_all_user_incomes(email):
        response = db.table("incomes").select("*").eq("email", email).execute()
        return response.data

    @staticmethod
    def create_income(data):
        new_income = Income(title=data['title'], amount=data['amount'], recurring=data['recurring'], frequency=data['frequency'], email=data['email'])
        # Income email must match a user email to match foreign key constraint
        response = db.table("incomes").insert(new_income.to_dict()).execute()
        return response.data

    @staticmethod
    def update_income(incomeId, updatedData):
        response = db.table("incomes").update(updatedData).eq("id", incomeId).execute()
        return response.data
    
    @staticmethod
    def delete_income(incomeId):
        response = db.table('incomes').delete().eq('id', incomeId).execute()
        return response.data