const birthdayInput = document.getElementById("birthday");
const result = document.getElementById("result");
const btn =  document.getElementById("btn");

btn.addEventListener("click", function() {
    const dob = birthdayInput.value;

    if(!dob){
        result.textContent = "Please select your date of birth !";
        result.style.color = "red";
        return;
    }

    // call function to age calculation

    const ageText = calculateAge(dob);
    result.textContent = ageText;
    result.style.color = "black";

    birthdayInput.value ="";

});


function calculateAge(dob){
let Today = new Date;
let currentDay = Today.getDate();
let currentMonth = Today.getMonth() +1;  //month are 0 based
let currentYear = Today.getFullYear();


birthDate = new Date(dob);
birthDay = birthDate.getDate();
birthMonth = birthDate.getMonth() +1 ;
birthYear = birthDate.getFullYear();


if(birthDate > Today){
    return "Invalid date ! you can't born in future, Enter correct DOB";
}



let years = currentYear - birthYear;
let months = currentMonth - birthMonth;
let days = currentDay - birthDay;



if (days < 0) {
    // find total days in the previous month
    let prevMonthDays = new Date(currentYear, currentMonth -1 , 0).getDate();
    days  += prevMonthDays;
    months -=1;
}

// if months are negetive, borrow from orevious month
if(months < 0 ) {
    months +=12;
    years -= 1;
}

return `you are ${years}, ${months} months and ${days} days old.`;

}
