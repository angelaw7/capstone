from flask import Blueprint, jsonify, request
from server.controllers.incomes.incomes_controller import IncomesController

incomes = Blueprint('incomes', __name__)

@incomes.route('/<userId>', methods=['GET'])
def getIncomes(userId):
    return jsonify(IncomesController.get_all_incomes(userId))


@incomes.route('/', methods=['POST', 'OPTIONS'])
def addIncomes():
    new_income = IncomesController.create_income(request)
    return jsonify(new_income), 201