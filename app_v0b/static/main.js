document.addEventListener('DOMContentLoaded', function() {
    const alunosBtn = document.getElementById('alunos-btn');
    const instrutoresBtn = document.getElementById('instrutores-btn');
    const treinosBtn = document.getElementById('treinos-btn');
    const exerciciosBtn = document.getElementById('exercicios-btn');
    
    const alunosSubBtn = document.getElementById('alunos-sub-buttons');
    const visualizaralunosBtn = document.getElementById('visualizar-alunos-btn');
    const inserirAlunoBtn = document.getElementById('inserir-aluno-btn');
    const alunoBackBtn = document.getElementById('aluno-back-btn');
   
    const instrutoresSubBtn = document.getElementById('instrutores-sub-buttons');
    const visuInstrutBtn = document.getElementById('visualizar-instrut-btn');
    const insertInstrutBtn = document.getElementById('inserir-instrut-btn');
    const instrutBackBtn = document.getElementById('instrut-back-btn');
 
    const treinosSubBtn = document.getElementById('treinos-sub-buttons');
    const visuTreinoBtn = document.getElementById('visualizar-treino-btn');
    const insertTreinoBtn = document.getElementById('inserir-treino-btn');
    const treinoBackBtn = document.getElementById('treino-back-btn');
 
    const exercsSubBtn = document.getElementById('exercicios-sub-buttons');
    const visuexercsBtn = document.getElementById('visualizar-exercicios-btn');
    const insertexercsBtn = document.getElementById('inserir-exercicios-btn');
    const exercsBackBtn = document.getElementById('exerc-back-btn');
         
    alunosBtn.addEventListener('click', function() {
        toggleMainButtons(false);
        alunosSubBtn.style.display = 'block';
    });

    alunoBackBtn.addEventListener('click', function() {
        toggleMainButtons(true);
        alunosSubBtn.style.display = 'none';
    });

    instrutoresBtn.addEventListener('click', function() {
        toggleMainButtons(false);
        instrutoresSubBtn.style.display = 'block';
    });

    instrutBackBtn.addEventListener('click', function() {
        toggleMainButtons(true);
        instrutoresSubBtn.style.display = 'none';
    });

    treinosBtn.addEventListener('click', function() {
        toggleMainButtons(false);
        treinosSubBtn.style.display = 'block';
    });

    treinoBackBtn.addEventListener('click', function() {
        toggleMainButtons(true);
        treinosSubBtn.style.display = 'none';
    });

    exerciciosBtn.addEventListener('click', function() {
        toggleMainButtons(false);
        exercsSubBtn.style.display = 'block';
    });

    exercsBackBtn.addEventListener('click', function() {
        toggleMainButtons(true);
        exercsSubBtn.style.display = 'none';
    });
    
    // Funções de redirecionamento
    visuTreinoBtn.addEventListener('click', function() {
        window.location.href = '/visualizar_treinos';
    });

    insertTreinoBtn.addEventListener('click', function() {
        window.location.href = '/add_treino';
    });

    visuexercsBtn.addEventListener('click', function() {
        window.location.href = '/visualizar_exercs';
    });

    insertexercsBtn.addEventListener('click', function() {
        window.location.href = '/add_exercicio';
    });

    function toggleMainButtons(show) {
        alunosBtn.style.display = show ? 'block' : 'none';
        instrutoresBtn.style.display = show ? 'block' : 'none';
        treinosBtn.style.display = show ? 'block' : 'none';
        exerciciosBtn.style.display = show ? 'block' : 'none';
    }
});
