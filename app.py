import os
from flask import Flask, render_template
from datetime import datetime  # Importe isso para usar timestamps únicos

app = Flask(__name__)


@app.route('/')
def index():
    now = datetime.now().strftime("%Y%m%d%H%M%S")  # atualiza o timestamp a cada reload da página
    return render_template('index.html', now=now)


if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
