
            console.log("Omri Granada");

function myFunction(){
    const inpObj = document.getElementById("age");
    if(!inpObj.checkValidity())
    {
        document.getElementBiId("demo").innerHTML = inpObj.validationMessage;
    } else
        {
            document.getElementById("demo").innerHTML = "Input OK";
        }

}