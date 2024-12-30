var myForm = document.forms[0];
var myElements = myForm.elements;
var myInputs = new Array(myForm.elements[0], myForm.elements[1]);
var myButton = myElements[3]

function checkForm(event){
    for(var i =0; i<myInputs.length;i++){
        if(myInputs[i].value =""){
            alert("you have not filled in your: " + myInputs[i].name)
            event.preventDefault();
        }
        else{
            myForm.submit();
            myButton.disabled = "true";
        }
    }

}

myForm.addEventListener("submit", checkForm, false);
