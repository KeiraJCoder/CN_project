function check(){
        let correctAns1 = 'carname = "volvo"';
        let correctAns2 = 'carname="volvo'
        let input = document.getElementById("q1").value;
        
        let score=0;
        
    
    if(input.toLowerCase() == correctAns1 || correctAns2) {
        score++;
        alert("That is correct")
        alert("You have a total of " + score + " points")
    }else{
        alert("Incorrect")
        };
    };
    

    document.getElementById("testForm").addEventListener("submit", function(e){
        e.preventDefault();
        });



// function check(){
//         let correctAns1= 'carname="Volvo"';
//         let input = document.getElementById(question1);
//         console.log(`testing input value:${input}`)
//         let score=0;
//         console.log(`testing input value:${input}`)
        
    
//     if(input.toLowerCase == correctAns1) {
//         score++;
//         alert("That is correct")
//         alert(score)
//     }else{
//         alert("Incorrect")
//         };
//     };
    
    
//     check();



//     let v1=document.getElementById('form').elements[0].value;
//     let v2=document.getElementById('form').elements[1].value;
//     let v3=document.getElementById('form').elements[2].value;
//      console.log('came',v1, v2, v3)

//     let score=0;
    


//     if(v2 == "i = 50" || "i=50" ){
//             score++;
//     }if(v3=='my_first_name = "John"' || 'my_first_name="John"'){
//             score++;
//     }if(score === 3) {
//       alert('Yes correct')
//       alert("You have a score of " + score)
//     } else {
//       alert('Incorrect, remember the syntax of a variable!')
//     }
    
