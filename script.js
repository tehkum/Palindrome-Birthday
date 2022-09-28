var inputDob = document.querySelector("#dob-input");
var checkBtn = document.querySelector("#check-btn");
var outputPal = document.querySelector("#output-pal");

function checkPalindromeOrNot(){
    // var dob = dateConversion(inputDob.value);
    if(inputDob.value.trim() != 0){
    var dob = inputDob.value.split("-");
    
    var yyyy = dob[0];
    var mm = dob[1];
    var dd = dob[2];
    
    var formatDate = formatOfDate(yyyy,mm,dd);
    var dobNum = formatDate;
    console.log(formatDate);
    var revNum = formatDate.split("").reverse().join("");
    console.log(revNum);
    if(dobNum === revNum) {
        outputPal.innerText = "year is palindrome";
    }else {
        outputPal.innerText = "year is not palindrome";
    }
}else{
    outputPal.innerText = "enter a date"
}
}

function formatOfDate(yyyy,mm,dd){
    var date = {day: '' , month: '', year: ''};
    if(+dd <10 ){
        date.day = '0' + dd.toString();      
    } else {
        date.day = dd.toString();
    }
    if(+mm <10 ){
        date.day = '0' + mm.toString();      
    } else {
        date.day = mm.toString();
    }
    date.year = yyyy.toString();

    return dd+mm+yyyy;

}

// function dateConversion(value)
// {
//     var month = value.toLocaleString('en-US',{month : '2-digit'});
//     var day = value.toLocaleString('en-US',{day : '2-digit'});
//     var year = value.getFullYear();
//     var date = day+month+year;
//     return date;
// }

function reverseOfDob(dob){
    var tempNum ;
    var revNo = 0;
    while(dob > 0){
        tempNum = dob % 10;
        dob = Math.floor(dob/10);
        revNo = revNo*10 + tempNum;
    }
    return revNo;
}

checkBtn.addEventListener("click", checkPalindromeOrNot);