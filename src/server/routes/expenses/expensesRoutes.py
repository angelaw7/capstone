from flask import Blueprint, jsonify, request
from server.controllers.expenses.expenses_controller import ExpensesController

expenses = Blueprint('expenses', __name__)

@expenses.route('/<userId>', methods=['GET'])
def getExpenses(userId):
    return jsonify(ExpensesController.get_all_expenses(userId))


@expenses.route('/', methods=['POST', 'OPTIONS'])
def addExpenses():
    new_expense = ExpensesController.create_expense(request)
    return jsonify(new_expense), 201

@expenses.route('/<expenseId>', methods=['PUT', 'OPTIONS'])
def updateExpense(expenseId):
    updated_expense = ExpensesController.update_expense(request, expenseId)
    return jsonify(updated_expense), 201

@expenses.route('/<expenseId>', methods=['DELETE'])
def deleteExpense(expenseId):
    ExpensesController.delete_expense(expenseId)
    return jsonify(expenseId), 201