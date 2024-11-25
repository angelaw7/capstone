from server.daos.expenses.expenses_dao import ExpensesDao

class ExpensesController:
    @staticmethod
    def get_all_expenses(userId):
        return ExpensesDao.get_all_user_expenses(userId)

    @staticmethod
    def create_expense(data):
        if 'image' in data:
            # TODO: call model with image data
            print("model called")
            return
        
        return ExpensesDao.create_expense(data)
        
        
