# Initializes the backend module


from flask import Flask

app = Flask(__name__)

# Importing prompt generation routes
from backend import dialogue, poetry, nonfiction, fiction

