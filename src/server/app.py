import sys
import os
from db import db

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from server import create_app

app = create_app()

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001)
