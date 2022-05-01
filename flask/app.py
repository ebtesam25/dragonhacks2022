from flask import Flask
from pymongo import MongoClient
import json
import os

# connecting to mongodb
mongodb_pw = os.environ['mongodb_pw']
mongodb_conn_str = f'mongodb+srv://ubuntu:{mongodb_pw}@cluster0.bfoxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
client = MongoClient(mongodb_conn_str)

# accessing collections from mongodb
db = client['tellmeastory']

# starting flask
app = Flask(__name__)

@app.route('/')
def test():
    return "working!" 
