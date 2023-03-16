// function ChangeColor()   
// {  
//     document.getElementById("but1").style.color = 'green';  
//     setTimeout("ChangeColor()", 2000);  
// }
function btnClick()
{
    let btn
    var Name=document.getElementById("name").value.trim()
    var mail=document.getElementById("email").value.trim()
    var subject=document.getElementById('subject').value.trim()
    var message=document.getElementById("message").value.trim()
          
        if(Name===""||mail===""||subject===""||message==="")
            {
                alert("Please fill all fields")
                btn=false
            }else if(!/^([a-zA-Z0-9\_.]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(mail)){
                alert("Please re-check at email")
                btn=false
             }
          
        return btn;
          
}
function mouseEnter() {
    document.getElementById("but1").style.color = "red";
  }
  
  function mouseLeave() {
    document.getElementById("but1").style.color = "white";
  }

