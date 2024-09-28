document.addEventListener('DOMContentLoaded', function() {
    const alunosBtn = document.getElementById('alunos-btn');
    const instrutoresBtn = document.getElementById('instrutores-btn');
    const equipamentosBtn = document.getElementById('equipamentos-btn');
    const subButtons = document.getElementById('sub-buttons');
    const optionsButtons = document.getElementById('options-buttons');
    const formContainer = document.getElementById('form-container');
    const backBtn = document.getElementById('back-btn');
    const backFormBtn = document.getElementById('back-form-btn');
    const backOptionsBtn = document.getElementById('back-options-btn');
    const visualizarAlunosBtn = document.getElementById('visualizar-alunos-btn');
    const inserirAlunoBtn = document.getElementById('inserir-aluno-btn');
    const todosBtn = document.getElementById('todos-btn');

    alunosBtn.addEventListener('click', function() {
        alunosBtn.style.display = 'none';
        instrutoresBtn.style.display = 'none';
        equipamentosBtn.style.display = 'none';
        subButtons.style.display = 'block';
    });

    backBtn.addEventListener('click', function() {
        alunosBtn.style.display = 'block';
        instrutoresBtn.style.display = 'block';
        equipamentosBtn.style.display = 'block';
        subButtons.style.display = 'none';
        optionsButtons.style.display = 'none';
        formContainer.style.display = 'none';
    });

    visualizarAlunosBtn.addEventListener('click', function() {
        subButtons.style.display = 'none';
        optionsButtons.style.display = 'block';
    });

    inserirAlunoBtn.addEventListener('click', function() {
        subButtons.style.display = 'none';
        formContainer.style.display = 'block';
    });

    backFormBtn.addEventListener('click', function() {
        formContainer.style.display = 'none';
        subButtons.style.display = 'block';
    });

    backOptionsBtn.addEventListener('click', function() {
        subButtons.style.display = 'block';
        optionsButtons.style.display = 'none';
    });

    todosBtn.addEventListener('click', function() {
        window.location.href = '/visualizar_alunos';  // Redireciona para a página que exibe todos os alunos
    });
});
