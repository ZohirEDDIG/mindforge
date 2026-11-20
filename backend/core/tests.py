from unittest.mock import patch 
from rest_framework.test import APIClient 

def test_health_database_up():
    with patch('core.views.MongoClient'):
        res = APIClient().get('/api/health/')
    assert res.status_code == 200
    assert res.json() == { 'status': 'ok', 'database': 'up' }


def test_health_database_down():
    with patch('core.views.MongoClient', side_effect=Exception('boom')):
        res = APIClient().get('/api/health/')
    assert res.status_code == 200
    assert res.json() == { 'status': 'ok', 'database': 'down' }