from flask import Flask, render_template, jsonify, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:postgres123@localhost/academia'
db=SQLAlchemy(app)

class Aluno(db.Model):
    __tablename__='data'
    id=db.Column(db.Integer, primary_key=True)
    namedb= db.Column(db.String(120))
    emaildb= db.Column(db.String(120), unique=True)
    idadedb = db.Column(db.Integer)
    
    def __init__(self, namedb, emaildb, idadedb):
        self.namedb = namedb
        self.emaildb = emaildb
        self.idadedb = idadedb

with app.app_context():
    db.create_all()
        

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/registro_aluno', methods=['POST']) #This can be acessed in 'localhost:5000'
def registro_aluno():
    if request.method=='POST':
        name = request.form['aluno_name']
        email = request.form['aluno_email']
        idade = request.form['aluno_idade']
        if (db.session.query(Aluno).filter(Aluno.emaildb==email).count())==0:
            data=Aluno(name, email, idade)
            db.session.add(data)
            db.session.commit()
            return render_template("registro_concluido.html")
    return render_template("index.html", text = "Aluno já registrado")



@app.route('/visualizar_alunos', methods=['GET'])
def visualizar_alunos():
    aluno_id = request.args.get('id', type=int)
    if aluno_id:
        aluno = Aluno.query.get(aluno_id)
        return render_template('aluno_details.html', aluno=aluno)
    
    alunos = Aluno.query.order_by(Aluno.namedb).all()  # Recupera todos os registros de alunos em ordem alfabética
    return render_template('visualizar_alunos.html', alunos=alunos)



if __name__ == "__main__":
    app.run(debug=True)

