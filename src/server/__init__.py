from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SECRET_KEY'] = ''

    from server.routes.expenses.expensesRoutes import expenses
    app.register_blueprint(expenses, url_prefix='/api/expenses')

    return app
