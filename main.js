const check = () =>{
    let score = 0
    let right_Answer_1 = document.getElementById("q-1a");
    let q1_ans_b = document.getElementById("q-1b");
    let q1_ans_c = document.getElementById("q-1c");
    let q1_ans_d = document.getElementById("q-1d");
    if (right_Answer_1.checked == true) {
        score++
        alert("Q1 Answer right")
    }
    else{
        alert("Q1 Answers wrong")
    }


let right_Answer_2 = document.getElementById("q-2a");
let q2_ans_b = document.getElementById("q-2b")
let q2_ans_c = document.getElementById("q-2c");
let q2_ans_d = document.getElementById("q-2d");
if (right_Answer_2.checked == true) {
    score++
    alert(" Q2 Answer Right")
}
else{
    alert(" Q2 Answer Wrong")
}


let right_Answer_3 = document.getElementById("q-3a");
let q3_ans_b = document.getElementById("q-3b")
let q3_ans_c = document.getElementById("q-3c");
let q3_ans_d = document.getElementById("q-3d");
if (right_Answer_3.checked == true) {
    score++;
    alert(" Q3 Answer Right")
}
else{
    alert(" Q3 Answer Wrong")
}


let right_Answer_4 = document.getElementById("q-4a");
let q4_ans_b = document.getElementById("q-4b");
let q4_ans_c = document.getElementById("q-4c")
let q4_ans_d = document.getElementById("q-4d");
if (right_Answer_4.checked == true){
    score++;
    alert(" Q4 Answer Right")
}
else{
    alert(" Q4 Answer Wong")
}


let right_Answer_5 = document.getElementById("q-5a");
let q5_ans_b = document.getElementById("q-5b")
let q5_ans_c = document.getElementById("q-5c");
let q5_ans_d = document.getElementById("q-5d")
if (right_Answer_5.checked == true) {
    score++;
    alert(" Q5 Answer Right")
}
else{
    alert(" Q5 Answer Wong")
}
 alert("Your score is " + score);

if (score === 5) {
        alert("Excellent!");
    } 
    else if (score === 4) {
        alert("Very Good!");
    } 
    else if (score === 3) {
        alert("Good!");
    } 
    else if (score === 2) {
        alert("Nice!");
    } 
    else if (score === 1) {
        alert("Improvement Needed");
    } 
    else {
        alert("Bad Luck");
    }
}

