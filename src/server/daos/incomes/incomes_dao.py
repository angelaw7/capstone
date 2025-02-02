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
