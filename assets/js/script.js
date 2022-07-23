// function init(){
//     console.log('js file hitting');
// };
// init();


// put questions into objects with this formatting 
// var question1 = {
    // questionText: "The question goes here as a string",
    // choiceList: ['put each', 'answer option', 'into an array', 'as a string'],
    // answer: 'correct answer as a string, copy paste from choiceList',
    // scoreValue: number that can be the same or different for each question based on how har it is 
// };

var question1 = {
    questionText: 'This is a valid way to declare variables in Javascript, var a, b, c;',
    choiceList: ['True', 'False', 'Not enough information to answer'],
    answer: 'True',
};

var question2 = {
    questionText: 'What is the method to keep a page from reloading after the submit button is clicked in the <form></form> element?',
    choiceList: ['preventRefresh()','preventPropagation()','preventBubbling()','preventStandard()','preventDefault()'],
    answer: 'preventDefault()',
};

var question3 = {
    questionText: "Given the following object: var obj = {name: 'John', age: 42, hasJob: true,}; what is the correct syntax to find the value of age?",
    choiceList: ['obj.age()','object["age"]','obj[age]','obj.age'],
    answer: 'obj.age',
};

console.log(question3.questionText);

var question4 = {
    questionText: 'Given this array: var arr = [0,1,2,3,4,5]; and this for loop condition inside of a called function: for (var i = 0; i < arr.length; i--); how many times would this loop run?',
    choiceList: ['6 times','It would not run','7 times','Forever', 'Not enough information'],
    answer: 'Forever',
};

var question5 = {
    questionText: 'What is the term for a function that is stored inside the key of an object?',
    choiceList: ['Standard Function','Call','Method','Callback Function'],
    answer: 'Method',
};

// loop through to generate the question order 
var questionList = [question1, question2, question3, question4, question5]

// NOTES: This is how to do the 5 seconds = X points rounded down 
// what the timer is 
// var timer = 53;
// how to make sure the time /5 is always just the whole number rounded down
// var rounding = Math.trunc(timer/5)
// this returns 10




// TODO: make a timer with setInterval() and a timerCount variable


// TODO:  append the question object content to the html


// TODO:  set the various parts of the HTML to display:hidden or visibility: none check CSS styling options


// TODO:  function to handle checking if the answer is correct or not and respond accordingly and increase score/decrease timer 


// TODO:  function to clear the content from the html when a choice is selected and pull up the next question.


// TODO:  function to trigger game over when timer hits 0 or when all the questions are answered


// TODO: function to use localStorage() set and get items to save scores 

