const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;



 function appendQuestion(question){
  let container = document.querySelector('.question-container')
  container.innerHTML = question.questionText;
}
  
  function askQuestionThen(time){
    
       question  = questions[0];
       
       appendQuestion(question);
       return new Promise(res => {
         
       })
       
       
  }
  
  
  function removeQuestion(){
    let container = document.querySelector('.question-container')
  container.innerHTML = "";
    
  }
  
  function askQuestionThenRemoveQuestion(time){
    let container = document.querySelector('.question-container')
  container.innerHTML = question.questionText;
    
   var myVar = setInterval(removeQuestion, time);
    
    
  }
  
  
  

