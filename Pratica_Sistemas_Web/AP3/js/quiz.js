//declarar variáveis
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;


//questões funcionam para que nossa função getQuestion mais tarde possa obter o valor correto do array

let questions = [{
    question: "Quem matou <i>Joanna Lannister</i>?",
    imgSrc: "imagens/question1.jpg",
    choiceA: "Tyron Lannister",
    choiceB: "Tywin Lannister",
    choiceC: "Aerys Targaryen",
    choiceD: "Cersei Lannister",
    correctAnswer: "A"
}, {
    question: "Qual foi o lobo gigante, pertencentes aos Stark, a morrer primeiro?",
    imgSrc: "imagens/question2.png",
    choiceA: "Fantasma – Ghost (Jon)",
    choiceB: "Nymeria (Arya)",
    choiceC: "Lady (Sansa)",
    choiceD: "Grey Wind (Robb)",
    correctAnswer: "C"
}, {
    question: "Qual o lema da casa Greyjoy?",
    imgSrc: "imagens/question3.jpg",
    choiceA: "O inverno está chegando",
    choiceB: "O que está morto não pode morrer",
    choiceC: "Nós não semeamos",
    choiceD: "Ouça-me rugir",
    correctAnswer: "C"
}, {
    question: "Durante a sexta temporada, de quem Rickon Stark era refém?",
    imgSrc: "imagens/question4.png",
    choiceA: "Lyanna Mormont",
    choiceB: "Cersei Lannister",
    choiceC: "Theon Greyjoy",
    choiceD: "Ramsay Bolton",
    correctAnswer: "D"
}, {
    question: "Quem foi o primeiro Corvo a matar um Vagante branco?",
    imgSrc: "imagens/question5.jpg",
    choiceA: "Jon Snow",
    choiceB: "Jeor Mormont",
    choiceC: "Bryden Rivers",
    choiceD: "Samwell Tarly",
    correctAnswer: "D"
}, {
    question: "Quem foi o responsável por Brandon Stark ficar paraplégico?",
    imgSrc: "imagens/question6.jpg",
    choiceA: "Cersei Lannister",
    choiceB: "Tyrion Lannister",
    choiceC: "Jaime Lannister",
    choiceD: "Lorde Baelish (Little Finger)",
    correctAnswer: "C"
}, {
    question: "Qual era o objetivo de Arya Stark, ao viajar para King’s Landing na última temporada?",
    imgSrc: "imagens/question7.jpg",
    choiceA: "Batalhar com Daenerys Targaryen",
    choiceB: "Matar Cersei Lannister",
    choiceC: "Matar Sandor Clegane (o perdigueiro)",
    choiceD: "Ajudar Jon Snow a tomar o reino",
    correctAnswer: "B"
}, {
    question: "Dos dragões pertencentes a Daenerys Targaryen, qual foi o primeiro a morrer?",
    imgSrc: "imagens/question8.jpg",
    choiceA: "Viseryon",
    choiceB: "Drogon",
    choiceC: "Rhaegal",
    choiceD: "Nenhuma das opções",
    correctAnswer: "A"
}, {
    question: "Qual foi a primeira cidade onde Daenerys Targaryen se refugiou?",
    imgSrc: "imagens/question9.jpeg",
    choiceA: "King’s Landing",
    choiceB: "Qarth",
    choiceC: "The Twins",
    choiceD: "Braavos",
    correctAnswer: "B"
}, {
    question: "Qual o significado de 'Vallar Morghulis'?",
    imgSrc: "imagens/question10.png",
    choiceA: "Todo homem deve servir",
    choiceB: "Todo homem deve morrer",
    choiceC: "Sua luta acabou",
    choiceD: "Sangue se paga com sangue",
    correctAnswer: "B"
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// Visualizar score

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> Você marcou " + score + " de 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Que pena! Parece que você não conhece nada de Game of Thrones, tente novamente!</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Parece que você não sabe tudo sobre Game of Thrones, ... pode melhorar!</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Parabéns,você conhece tudo sobre Game of Thrones!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function que checa se a resposta está correta

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorreto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorreto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
