let weight = document.getElementById('weight');
let height = document.getElementById('height');
let calculatebtn = document.getElementById('calculatebtn');
let resetbtn = document.getElementById('resetbtn');
let BMI = document.getElementById("BMI");
let BMICATEGORY = document.getElementById("BMICATEGORY");



// Calculate Button
calculatebtn.onclick = function() {
    let userweight = weight.value;
    let userheight = height.value;
    let userheightInMeters = userheight / 100;

    // Calculating BMI
    function calculateBMI(){
        let BMIresult = parseFloat((userweight / (userheightInMeters ** 2)).toFixed(2));
        BMI.textContent = BMIresult

        // Displaying BMI Category
        if(isNaN(BMIresult)){
            BMICATEGORY.textContent = "Input is required."
        }else if(BMIresult < 18.5){
            BMICATEGORY.textContent = "You are Underweight."
        }else if(BMIresult >= 18.5  &&  BMIresult <= 24.9){
            BMICATEGORY.textContent = "You have Normal weight."
        }else if(BMIresult >= 25  &&  BMIresult <= 29.9){
            BMICATEGORY.textContent = "You are Overweight."
        }else {
            BMICATEGORY.textContent = "You are Obese."
        }
    }
    calculateBMI();
}


// Reset Button
resetbtn.onclick = function() {
    weight.value = "";
    height.value = "";
    BMI.textContent = "";
    BMICATEGORY.textContent = "";
}