from flask import Blueprint, jsonify, request
from server.controllers.expenses.expenses_controller import ExpensesController

expenses = Blueprint('expenses', __name__)

@expenses.route('/<userId>', methods=['GET'])
def getExpenses(userId):
    return jsonify(ExpensesController.get_all_expenses(userId))

@expenses.route('/', methods=['POST'])
def addExpense():
    expense_data = request.json
    new_expense = ExpensesController.create_expense(expense_data)
    return jsonify(new_expense), 201
