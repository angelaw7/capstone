from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your-secret-key'

    from server.routes.expenses.expensesRoutes import expenses
    app.register_blueprint(expenses, url_prefix='/api/expenses')

    return app
