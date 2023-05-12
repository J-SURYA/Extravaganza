var a = document.getElementById("id")
var b = document.getElementById("password")
function validate(){
    if(a.value == "sa@123" && b.value == "1234"){
        return true;
    }    
alert("Invalid credentials.")
    return false;
}
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    if( validate()){
        document.querySelector("form").submit();
    }
});