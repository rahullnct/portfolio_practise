
function ontab(tabname)
{
var experts=document.getElementsByClassName('expert');
var expertises=document.getElementsByClassName('details');
   for(let expert of experts)
   {
    expert.classList.remove('active_info');
   }
   for(let expertise of expertises)
   {
    expertise.classList.remove('active_tab');
   }
   event.currentTarget.classList.add('active_info');
   document.getElementById(tabname).classList.add('active_tab');
}