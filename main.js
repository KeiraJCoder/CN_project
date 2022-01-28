// ==========================QUESTION 1=============================================

function check1(){
    let cAns1 = 'print("hello world")';
    let input = document.getElementById("q1").value;
    
    let score=0;
    

if(input.toLowerCase() == cAns1 ) {
    score++;
    alert("That is correct")
    alert("You have a total of " + score + " points")
}else{
    alert("Incorrect. Try to remember correct variable syntax")
    };
};

// =============================QUESTION 2==========================================

function check2(){
        let correctAns1 = 'carname = "volvo"';
        let correctAns2 = 'carname="volvo"';
        let input = document.getElementById("q2").value;
        
        let score=1;
        
    
    if(input.toLowerCase() == correctAns1 || input.toLowerCase() == correctAns2) {
        score++;
        alert("That is correct")
        alert("You have a total of " + score + " points")
    }else{
        alert("Incorrect. Try to remember correct variable syntax")
        };
    };
   
// ============================QUESTION 3===========================================

function check3(){
        let cA1 = 'i = 50';
        let cA2 = 'i=50';
        let input = document.getElementById("q3").value;
        let score = 2;
        
    if(input.toLowerCase() == cA1 || input.toLowerCase() == cA2) {
        score++;
        alert("That is correct")
        alert("You have a total of " + score + " points")
    }else{
        alert("Incorrect. Integers don't need parenthesis")
        };
    };


// ==============================QUESTION 4=========================================

function check4(){
        let a3 = 'my_first_name = "john"';
        let a4 = 'my_first_name="john"';
        let input = document.getElementById("q4").value;
        let score = 3;
    
    if(input.toLowerCase() == a3 || input.toLowerCase() == a4) {
        score++;
        alert("That is correct")
        alert("You have a total of " + score + " points")
    }else{
        alert("Incorrect. Remember to use snake case")
        alert("Also maybe refresh your memory on naming conventions")
        };
    };


// ==============================QUESTION 5=========================================
    function check5(){
        let qA1 = 'print("i live in england".upper())';
        let qA2 = 'print("I LIVE IN ENGLAND")'
        let input = document.getElementById("q5").value;
        let score = 4;
        
    if(input.toLowerCase() == qA1) {
        score++;
        alert("That is correct")
        alert("You have a total of " + score + " points")
    }else if(input == qA2){
         alert("Nice try, now do it using code")
    } else {
        alert("Incorrect. Did you forget brackets?")
    };
};

// =============================QUESTION 6==========================================

function check6(){
    let queA1 = 'import random';
    let input = document.getElementById("q6").value;
    let score = 5;
    
if(input.toLowerCase() == queA1) {
    score++;
    alert("That is correct")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Did you forget brackets?")
};
};

// ==============================QUESTION 7=========================================

function check7(){
    let quA1 = 'print(random.randint(1-10))';
    let input = document.getElementById("q7").value;
    let score = 6;
    
if(input.toLowerCase() == quA1) {
    score++;
    alert("That is correct")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Did you forget brackets?")
};
};

// ==============================QUESTION 8=========================================

function check8(){
    let qusA1 = 'input("what is your name?")';
    let qusA2 = 'input("what is your name? ")'
    let input = document.getElementById("q8").value;
    let score = 7;
    
if(input.toLowerCase() == qusA1 || input.toLowerCase() == qusA2) {
    score++;
    alert("That is correct")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Did you forget brackets?")
};
};

// ==============================QUESTION 9=========================================

function check9(){
    let quesA1 = 'print(fav_drink)';
    let input = document.getElementById("q9").value;
    let score = 8;
    
if(input.toLowerCase() == quesA1) {
    score++;
    alert("That is correct. Well done")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Did you forget brackets?")
};
};


// ==============================QUESTION 10=========================================

function check10(){
    let questA1 = 'print(f"my favourite drink is {fav_drink}")';
    let input = document.getElementById("q10").value;
    let score = 9;
    
if(input.toLowerCase() == questA1) {
    score++;
    alert("That is correct. Well done")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Did you forget brackets?")
};
};

// ==============================QUESTION 11=========================================

function check11(){
    let questiA1 = 'i += 2';
    let input = document.getElementById("q11").value;
    let score = 10;
    
if(input.toLowerCase() == questiA1) {
    score++;
    alert("That is correct. Well done")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Did you forget brackets?")
};
};

// ==========================STOP PAGE REFRESH ON SUBMIT=============================================


    document.getElementById("QUESTIONS").addEventListener("submit", function(e){
    e.preventDefault();
    });
   
    

