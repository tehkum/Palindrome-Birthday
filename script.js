var inputDob = document.querySelector("#dob-input");
var checkBtn = document.querySelector("#check-btn");
var outputPal = document.querySelector("#output-pal");

function checkPalindromeOrNot(){
    var dob = Number(inputDob.value.replaceAll("-", ""));
    console.log(dob)
    var reverseNum = reverseOfDob(dob);
    console.log(reverseNum)
    if(dob === reverseNum) {
        outputPal.innerText = "year is palindrome";
    }else {
        outputPal.innerText = "year is not palindrome";
    }
}

function reverseOfDob(dob){
    var tempNum ;
    var revNo = 0;
    while(dob > 0){
        tempNum = dob % 10;
        dob = Math.trunc(dob/10);
        revNo = revNo*10 + tempNum;
    }
    return revNo;
}

checkBtn.addEventListener("click", checkPalindromeOrNot);