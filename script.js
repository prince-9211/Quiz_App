document.addEventListener('DOMContentLoaded',function(){
    let quizData={
            sections : [
            {
                "sectionTitle": "General Knowledge",
                "questions":[
                    {
                        "questionType":"mcq",
                        "question":"1.Which planet in the solar system is known as the “Red Planet”?",
                        "options":["Venus","Earth","Mars","Jupiter"],
                        "answer":"Mars"
                    },
                    {
                        "questionType":"text",
                        "question":"2.What is the capital of Italy?",
                        "answer":"Rome"
                    },
                    {
                        "questionType":"number",
                        "question":"3.How many continents are there?",
                        "answer":7
                    },
                    {
                        "questionType":"mcq",
                        "question":"4.What is the largest lake in the world?",
                        "options":["Caspian Sea","Baikal","Lake Superior","Ontario"],
                        "answer":"Baikal"
                    },
                    {
                        "questionType":"mcq",
                        "question":"5.What gas is used to extinguish fires?",
                        "options":["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],
                        "answer":"Nitrogen"
                    },
                    {
                        "questionType":"mcq",
                        "question":"6.Which of the following planets is not a gas giant?",
                        "options":["Mars","Jupiter","Saturn","Uranus"],
                        "answer":"Mars"
                    },
                    {
                        "questionType":"number",
                        "question":"7.How many bones are in the body of an adult human?",
                        "answer":206
                    },
                    {
                        "questionType":"text",
                        "question":"8.What is the capital of Japan?",
                        "answer":"Tokyo"
                    },
                    {
                        "questionType":"mcq",
                        "question":"9.What animal is the national symbol of Australia?",
                        "options":["Kangaroo","Koala","Emu","Crocodile"],
                        "answer":"Kangaroo"
                    },
                    {
                        "questionType":"mcq",
                        "question":"10.For which of these disciplines Nobel Prize is awarded?",
                        "options":["Physics, Chemistry","Physiology","Medicine","All of the above"],
                        "answer":"All of the above"
                    }
                ]
            },
            {
                "sectionTitle":"Science",
                "questions":[
                    {
                      "questionType":"mcq",
                      "question":"1.What type of chemical reactions take place when electricity is passed through water?",
                      "options":["Decomposition","Combination","Displacement","Double Displacement"],
                      "answer":"Decomposition"
                    },
                    {
                        "questionType":"text",
                        "question":"2.what is the main function of the cerebrum?",
                        "answer":"Thinking"
                    },
                    {
                        "questionType":"mcq",
                        "question":"3.The highest coordinating center in the human body is:",
                        "options":["Kidney","Heart","Brain","Spinal cord"],
                        "answer":"Brain"
                    },
                    {
                        "questionType":"mcq",
                        "question":"4.which of the following diseases is not sexually transmitted?",
                        "options":["Syphilis","Gonorrhea","HIV-AIDS","Hepatitis"],
                        "answer":"Hepatitis"
                    },
                    {
                        "questionType":"mcq",
                        "question":"5.What is the color of the silver chloride?",
                        "options":["Grey","White","Brown","Greenish"],
                        "answer":"White"
                    },
                    {
                        "questionType":"mcq",
                        "question":"6.Which thing changes after the rancidity of food?",
                        "options":["Smell and size","Taste and size","Smell and taste","Taste and shape"],
                        "answer":"Smell and taste"
                    },
                    {
                        "questionType":"mcq",
                        "question":"7.Metal oxide + Acid →?",
                        "options":["Salt + Hydrogen",
                        "Metal Hydrate + hydrogen",
                        "Salt + Water",
                        "Metal hydrate + Water"],
                        "answer":"Salt + Water"
                    },
                    {
                        "questionType":"mcq",
                        "question":"8.Name the metal which is in liquid form at room temperature?",
                        "options":["Mercury","Gallium","Cesium","Daimond"],
                        "answer":"Mercury"
                    },
                    {
                        "questionType":"mcq",
                        "question":"9.Which of the following metal is the most reactive metal?",
                        "options":["Sodium","potassium","Gold","Aluminum"],
                        "answer":"potassium"
                    },
                    {
                        "questionType":"mcq",
                        "question":"10.Which of the following metal is not reactive metal?",
                        "options":["Sodium","potassium","Gold","Aluminum"],
                        "answer":"Gold"
                    }
                ]
            },
            {
                "sectionTitle":"Mathematics",
                "questions":[
                    {
                        "questionType":"mcq",
                        "question":"1.Find the Missing Term in Multiples of 6 : 6, 12, 18, 24, _, 36, 42, _ 54, 60.",
                        "options":["32,45","30,48","24,40","25,49"],
                        "answer":"32,48"  
                    },
                    {
                        "questionType":"mcq",
                        "question":"2.The Product of 131 × 0 × 300 × 4",
                        "options":["131","300","0","1200"],
                        "answer":"0"
                    },
                    {
                        "questionType":"mcq",
                        "question":"3.If David’s age is 27 years old in 2011. What was his age in 2003?",
                        "options":["17","37","19","20"],
                        "answer":"19"
                    },
                    {
                        "questionType":"mcq",
                        "question":"4.How Many Months Make a Century?",
                        "options":["1200","12","120","12000"],
                        "answer":"1200"
                    },
                    {
                        "questionType":"mcq",
                        "question":"5.What Number Comes Before 9019?",
                        "options":["9099","9091","9109","None of these"],
                        "answer":"None of these"
                    },
                    {
                        "questionType":"mcq",
                        "question":"6.How Many Months Have 120 Days?",
                        "options":["12","4","11","2"],
                        "answer":"4"
                    },
                    {
                        "questionType":"mcq",
                        "question":"7.Priya had 16 Red Balls, 2 Green Balls, 9  Blue Balls, and 1 Multicolor Ball. If He Lost 9 Red Balls, 1 Green Ball, and 3 Blue Balls. How Many Balls would be Left?",
                        "options":["15","11","28","39"],
                        "answer":"15"
                    },
                    {
                        "questionType":"mcq",
                        "question":"8.What is 6% Equals to",
                        "options":["0.06","0.6","0.0006","0.006"],
                        "answer":"0.06"
                    },
                    {
                        "questionType":"mcq",
                        "question":"9.How Many Years are there in a Decade?",
                        "options":["5 years","10 years","15 years","20 years"],
                        "answer":"10 years"
                    },
                    {
                        "questionType":"mcq",
                        "question":"10.Solve 23 + 3 ÷ 3",
                        "options":["24","25","26","27"],
                        "answer":"24"
                    }
                ]
    
            },
            {
                "sectionTitle":"Indian History",
                "questions":[
                    {
                        "questionType":"mcq",
                        "question":"1.Vallabhi era is identical with which of the following era?",
                        "options":["Vikrama era","Gupta era","Harsha era","None of the above"],
                        "answer":"Gupta era"  
                    },
                    {
                        "questionType":"mcq",
                        "question":"2.On the bank of which river, Mahavira attained Kaivalaya?",
                        "options":["Niranjana"," Rijupalika","Yamuna","Jamuna"],
                        "answer":" Rijupalika"
                    },
                    {
                        "questionType":"mcq",
                        "question":"3.With which among the following Vedas, the Shatapatha Brahmana is related to___?",
                        "options":["Rigveda","Yajurveda","Samaveda","Atharvaveda"],
                        "answer":"Yajurveda"
                    },
                    {
                        "questionType":"mcq",
                        "question":"4.Which among the following current states of India was known as Pragjyotisha in ancient time?",
                        "options":["Assam","Karnataka","Bihar","Gujarath"],
                        "answer":"Assam"
                    },
                    {
                        "questionType":"mcq",
                        "question":"5.Who was the first Indo-Greek king, who became Buddhist?",
                        "options":["Menander II","Apollodotus II","Apollodotus I","Antiochus II"],
                        "answer":"Menander II"
                    },
                    {
                        "questionType":"mcq",
                        "question":"6.The ancient places of Badami, Dwarasamudra and Warangal are related to which of the following dynasties?",
                        "options":["Chalukyas, Hoysalas, Kaktiyas","Cholas, Hoysalas, Kaktiyas","Pallavas, Hoysalas, Kaktiyas","None of the above"],
                        "answer":"Chalukyas, Hoysalas, Kaktiyas"
                    },
                    {
                        "questionType":"mcq",
                        "question":"7.After death of Bindusara, who among the following is considered to help Asoka to capture the throne?",
                        "options":["Radhagupta","Tishya","Bairam khan","Vishnugupta"],
                        "answer":"Radhagupta"
                    },
                    {
                        "questionType":"mcq",
                        "question":"8.Which of the following Vedas is sometimes referred as the “Veda of magical formulas”?",
                        "options":["Atharvaveda","Yajurveda","Samveda","Rig-Veda"],
                        "answer":"Atharvaveda"
                    },
                    {
                        "questionType":"mcq",
                        "question":"9.In the early Vedic age, Vishnu was one of the names of __?",
                        "options":["Surya","Agni","Dyaus","Prajapati"],
                        "answer":"Surya"
                    },
                    {
                        "questionType":"mcq",
                        "question":"10.We have read that the writing in the Indus valley Civilization was Boustrophedon. This means that ______?",
                        "options":["It was written left to right and right to left in alternate lines","It was written up to down","It was written left to right"," It was written right to left"],
                        "answer":"It was written left to right and right to left in alternate lines"
                    }
                ]
    
            },
            ],
    };
    initSections();

    function initSections(){
        let sections=document.querySelectorAll('.section');
        sections.forEach((section) => {
        section.addEventListener("click",()=>{
            let sectionNumber=parseInt(section.getAttribute("data-section"));
            startQuiz(sectionNumber);
        })
        })
    }

    function startQuiz(index){
        const currentQuestions=quizData.sections[index].questions; 
        let currentQuestionIndex=0;
        let score=0;
        let answerSelected=false;
        document.getElementById("quiz-container").style.display="none";
        document.getElementById("question-container").style.display="block";
        document.getElementById("question-container").innerHTML=`
        <p id="score">Score:0</p>
        <div id="question"></div>
        <div id="options"></div>
        <button id="next-button">Next</button>`;
    
         showQuestions();
    
      function showQuestions(){
     //    document.getElementById("question").textContent=currentQuestions[currentQuestionIndex].question;
        const question=currentQuestions[currentQuestionIndex];
        const questionElement=document.getElementById('question');
        const optionsElement=document.getElementById('options');

        questionElement.textContent=question.question;
        optionsElement.innerHTML='';
        

        if(question.questionType === "mcq"){
            question.options.forEach(Option =>{
                const optionElement=document.createElement('div');
                optionElement.textContent=Option;
                optionElement.addEventListener('click',function(){
                    if(!answerSelected){
                        answerSelected=true;
                        optionElement.classList.add("selected");
                        checkAnswer(Option,question.answer);
                        console.log("selected",Option)
                    }
                });
                optionsElement.appendChild(optionElement);
            });
        }else{
// for text and nuhmber questions types
            const inputElement=document.createElement('input');
            inputElement.type=question.questionType === 'number' ? 'number' :'text';
            const submitButton=document.createElement('button');
            submitButton.textContent='Submit Answer';
            submitButton.className='submit-answer';

            submitButton.onclick =() =>{
                if(!answerSelected){
                    answerSelected=true;
                    checkAnswer(inputElement.value.toString(),question.answer.toString());
                }
            };


            optionsElement.appendChild(inputElement);
            optionsElement.appendChild(submitButton);
        }       
     }
        function checkAnswer(givenAnswer,correctAnswer){
          const feedbackElement=document.createElement('div');
          feedbackElement.id='feedback';
          if(givenAnswer === correctAnswer || correctAnswer.toLowerCase() === givenAnswer.toLowerCase()){
            score++;
            feedbackElement.textContent='correct!';
            feedbackElement.style.color='green';
          }else{
            feedbackElement.textContent=`wrong. Correct answer: ${correctAnswer}`;
            feedbackElement.style.color='red';
          }
          const optionsElement=document.getElementById('options');
          optionsElement.appendChild(feedbackElement);
          updateScore();
          
        }

        function updateScore(){
           document.getElementById('score').textContent="Score:" + score;

        }

     document.getElementById("next-button").addEventListener("click",() => {
        if(currentQuestionIndex >= currentQuestions.length-1){
            console.log("Quiz Over!!!")
            endQuiz();
        }else{
            answerSelected=false;
           currentQuestionIndex++;
           showQuestions();
        }
     })
     function endQuiz(){
        let questioncontainer=document.getElementById('question-container');
        let quizContainer=document.getElementById('quiz-container')
        questioncontainer.innerHTML=`<h1>Quiz Completed</h1>
        <p>Your final score:${score}/${currentQuestions.length}</p>
        <button id="home-button">Go to Home</button>`;
        document.getElementById('home-button').addEventListener('click',function(){
            quizContainer.style.display='grid';
            questioncontainer.style.display='none';
        });
     }
    }
});