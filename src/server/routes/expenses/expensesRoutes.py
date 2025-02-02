from flask import Blueprint, jsonify, request
from server.controllers.expenses.expenses_controller import ExpensesController

expenses = Blueprint('expenses', __name__)

@expenses.route('/<userEmail>', methods=['GET'])
def getExpenses(userEmail):
    return jsonify(ExpensesController.get_all_expenses(userEmail))


@expenses.route('/', methods=['POST', 'OPTIONS'])
def addExpenses():
    new_expense = ExpensesController.create_expense(request)
    return jsonify(new_expense), 201