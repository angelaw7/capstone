import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

from app import app
@pytest.fixture
def client():
    with app.test_client() as client:
        yield client
        

def test_get_incomes_valid_user(client):
	test_email = "hi@email.com"

	response = client.get(f'/api/incomes/{test_email}')
	assert response.status_code == 200
     
	income_list = response.get_json()
	for income in income_list:
		assert income['email'] == test_email
	
def test_get_incomes_invalid_user(client):
	test_email = "nonexistentuser@test.com"

	response = client.get(f'/api/incomes/{test_email}')
	""" To be implemented """
	# assert response.status_code == 404

