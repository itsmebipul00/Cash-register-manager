const billAmount= document.querySelector(".bill-amount");
const cashAmount= document.querySelector(".cash-amount");
const errorMsg= document.querySelector(".error-message");
const notes= document.querySelectorAll(".notes");
const button= document.querySelector(".btn")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

button.addEventListener('click', function validateAmount(){
    // location.reload();

    if(billAmount.value > 0){
        if(cashAmount.value < billAmount.value){
            const val= -(cashAmount.value- billAmount.value);
            errorMsg.innerText= `You paid ${cashAmount.value}. You need to pay ${val} rupees more`;
            reload()
        }else{
            const amtReturn= cashAmount.value- billAmount.value;
            console.log(amtReturn);
            calcChange(amtReturn);
        }
    }else{
        errorMsg.innerText= 'Invalid bill amount';
        reload()
    }
})

function calcChange(amtReturn){
    for(let i= 0; i<availableNotes.length; i++){
    
        const noOfNotes= Math.trunc(amtReturn/availableNotes[i]);
       
        amtReturn= amtReturn % availableNotes[i];

        notes[i+1].innerText =noOfNotes;
     
    }
    reload()
}

function reload(){
    setTimeout(function(){
        location.reload();
    },4000);
}