document.getElementById("form").addEventListener("submit", (e)=>{

    // keep the result section blocked
    document.getElementById("results").style.display = "none";
    // unblock the loading section
    document.getElementById("loading-symbol").style.display = "block";

    setTimeout(calculate, 1000);

    e.preventDefault();

});


function calculate(e){

    // These are the web elements where we get user inputs
    const principal = document.getElementById("principal");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");

    // User Input values
    const P = parseFloat(principal.value);
    const r = parseFloat(interest.value);
    const n = parseFloat(years.value);

    if (document.title=="ಮರುಪಾವತಿ ಲೆಕ್ಕಯಂತ್ರ"){
        calculateEMI(P,r,n);
    }
    else{
        calculateFD(P,r,n);
    }
    e.preventDefault();
}

function showAlert(error){
    
    // create an alert box if no values are provided or if any one of the values are missing
    const alertBox = document.createElement('div')

    // add classname to the alert element
    alertBox.className = "alert alert-danger"

    // display error message
    alertBox.appendChild(document.createTextNode(error))

    // placement of alert message 
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    // place alert message above application heading but within the card
    card.insertBefore(alertBox, heading)

    // set a timer for the alert to disappear
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000);


}

function calculateEMI(P,r,n){

    // These are the web elements, whose values are going to be the result of our calculations
    const monthly_amount = document.getElementById("monthly_amount");
    const yearly_amount = document.getElementById("yearly_amount");
    const invested_amount = document.getElementById("investement");
    const total_amount = document.getElementById("total_amount");
    const total_interest = document.getElementById("total_interest");

    // monthly payment calculation
    const monthly_r = r/100/12;
    const monthly_n = n*12;
    const monthly_payment = P*monthly_r/(1-(1+monthly_r)**(-monthly_n));

    if (isFinite(monthly_payment)){

        // monthly payment
        monthly_amount.value = monthly_payment.toFixed(2);

        // yearly payment
        yearly_amount.value = (monthly_payment*12).toFixed(2);

        // total repayment
        total_amount.value = (monthly_payment * monthly_n).toFixed(2);

        // total interest accured
        total_interest.value = (total_amount.value - P).toFixed(2);

        // unblock the result section
        document.getElementById("results").style.display = "block";
        // keep the loading section blocked
        document.getElementById("loading-symbol").style.display = "none";

    }
    else{

        showAlert("ಎಲ್ಲಾ ಮಾಹಿತಿ ನೀಡಿ")
        
        // keep the loading section blocked
        document.getElementById("loading-symbol").style.display = "none";
    }

}

function calculateFD(P,r,n){
    const invested_amount = document.getElementById("investement");
    const total_amount = document.getElementById("total_amount");
    const total_interest = document.getElementById("total_interest");

    if (isFinite(P)){

        invested_amount.value = P.toFixed(2);

        // total repayment
        total_amount.value = (P*(1+r*n/100)).toFixed(2);

        // total interest accured
        total_interest.value = (total_amount.value - P).toFixed(2);

        // unblock the result section
        document.getElementById("results").style.display = "block";
        // keep the loading section blocked
        document.getElementById("loading-symbol").style.display = "none";

    }
    else{

        showAlert("ಎಲ್ಲಾ ಮಾಹಿತಿ ನೀಡಿ")
        
        // keep the loading section blocked
        document.getElementById("loading-symbol").style.display = "none";
    }

}