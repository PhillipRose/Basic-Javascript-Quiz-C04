function init(){
    console.log('js file hitting');
};
init();


// put questions into objects with this formatting 
// var question1 = {
    // questionText: "The question goes here as a string",
    // choiceList: ['put each', 'answer option', 'into an array', 'as a string'],
    // answer: 'correct answer as a string, copy paste from choiceList',
    // scoreValue: number that can be the same or different for each question based on how har it is 
// };


// NOTES: This is how to do the 5 seconds = X points rounded down 
// what the timer is 
// var timer = 53;
// how to make sure the time /5 is always just the whole number rounded down
// var rounding = Math.trunc(timer/5)
// this ruturns 10




// TODO: make a timer with setInterval() and a timerCount variable 
// TODO:  append the question object content to the html
// TODO:  set the various parts of the HTML to display:hidden or visibility: none check CSS styling options
// TODO:  function to handle checking if the answer is correct or not and respond accordingly and increase score/decrease timer 
// TODO:  function to clear the content from the html when a choice is selected.
// TODO:  function to trigger game over when timer hits 0 or when all the questions are answered
// TODO: function to use localStorage() set and get items to save scores 
// TODO: function to change timer color when it gets low enough 