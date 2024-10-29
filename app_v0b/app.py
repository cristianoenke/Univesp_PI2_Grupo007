from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:postgres123@localhost/academia'
db = SQLAlchemy(app)

# Classe Exercicio
class Exercicio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome_exerc= db.Column(db.String(50))
    categ_exer = db.Column(db.String(50))
    descr_exerc= db.Column(db.String(140))
    # def __init__(self, nome_exerc, categ_exer, descr_exerc):
    #     self.nome_exerc = nome_exerc
    #     self.categ_exer = categ_exer
    #     self.descr_exerc = descr_exerc

# Classe Treino
class Treino(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    numero_series = db.Column(db.Integer)
    repeticoes = db.Column(db.Integer)
    grupo_muscular = db.Column(db.String(50))
    membro_corpo = db.Column(db.String(50))
    exercicios = db.relationship('Exercicio', secondary='exercicios_no_treino', backref='treinos')
    # def __init__(self, nome, numero_series, repeticoes,grupo_muscular,membro_corpo,contem_exercicios):
    #     self.nome = nome
    #     self.numero_series = numero_series
    #     self.repeticoes = repeticoes
    #     self.grupo_muscular = grupo_muscular
    #     self.membro_corpo = membro_corpo
    #     self.contem_exercicios = contem_exercicios

# Tabela associativa para Exercicio e Treino
exercicios_no_treino = db.Table('exercicios_no_treino',
    db.Column('treino_id', db.Integer, db.ForeignKey('treino.id'), primary_key=True),
    db.Column('exercicio_id', db.Integer, db.ForeignKey('exercicio.id'), primary_key=True)
)

with app.app_context():
    db.create_all() 


@app.route('/')
def index():
    return render_template('index.html')

# Rota para adicionar uma exercicio
@app.route('/add_exercicio', methods=['GET', 'POST'])
def add_exercicio():
    if request.method == 'POST':
        nome_exerc = request.form['nome_exerc']
        categ_exer = request.form['categ_exerc']
        descr_exerc= request.form['descr_exerc']
        novo_exerc = Exercicio(nome_exerc=nome_exerc, categ_exer=categ_exer, descr_exerc=descr_exerc)
        db.session.add(novo_exerc)
        db.session.commit()
        return redirect(url_for('add_exercicio'))
    return render_template('exercicio_form.html')

# # Rota para adicionar um Treino
@app.route('/add_treino', methods=['GET', 'POST'])
def add_treino():
    exercicios = Exercicio.query.all()
    if request.method == 'POST':
        nome = request.form['nome_treino']
        selected_exercicios_ids = request.form.getlist('exercicios')
        novo_treino = Treino(nome=nome)
        for exercicio_id in selected_exercicios_ids:
            exercicio = Exercicio.query.get(exercicio_id)
            novo_treino.exercicios.append(exercicio)
        db.session.add(novo_treino)
        db.session.commit()
        return redirect(url_for('add_treino'))
    return render_template('treino_form.html', exercicios=exercicios)

@app.route('/visualizar_treinos')
def visualizar_treinos():
    treinos = Treino.query.all()
    return render_template('visualizar_treinos.html', treinos=treinos)

if __name__ == '__main__':
    app.run(debug=True)
