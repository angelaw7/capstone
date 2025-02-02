from server.models.incomes.income import Income
from server.db import db

class IncomesDao:
    @staticmethod
    def get_all_user_incomes(email):
        response = db.table("incomes").select("*").eq("email", email).execute()
        return response.data

    @staticmethod
    def create_income(data):
        new_income = Income(title=data['title'], amount=data['amount'], recurring=data['recurring'], frequency=data['frequency'], email=data['email'], created_at=data['created_at'])
        # TODO: add expense data to db and adjust return logic 
        return {
            "id": 3, 
            "title": new_income.title, 
            "amount": new_income.amount, 
            "recurring": new_income.recurring, 
            "frequency": new_income.frequency,
            "email": new_income.email,
            "created_at": new_income.created_at,
        }

    @staticmethod
    def update_income(incomeId, updatedData):
        # TODO: implement logic to update income for given user
        return {
            "oldIncome": {
                "id": 1,
                "title": "Freelance Work",
                "amount": 500.00,
                "recurring": True,
                "email": "user@example.com",
                "created_at": "2025-01-30T14:45:00Z"
            },
            "newIncome" :  {
                "id": 1,
                "title": "Freelance Work",
                "amount": 750.00,
                "recurring": True,
                "email": "user@example.com",
                "created_at": "2025-02-01T14:45:00Z"
            },
        }
    
    @staticmethod
    def delete_income(incomeId):
        # TODO: implement logic to delete a specific income for given user
        return {
            "id": 1,
            "title": "Freelance Work",
            "amount": 500.00,
            "recurring": True,
            "email": "user@example.com",
            "created_at": "2025-01-30T14:45:00Z"
        },