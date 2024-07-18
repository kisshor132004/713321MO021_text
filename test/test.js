var disp = document.getElementById("display");
disp.value = parseInt(1);
function add(){
        disp.value++;
    }
   
function sub()
{
    if(disp.value>0)
        disp.value--;
}



