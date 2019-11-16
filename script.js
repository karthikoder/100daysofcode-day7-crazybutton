
const up = document.getElementById('up')
const middle1 = document.getElementById('middle1')
const middle2 = document.getElementById('middle2')
const middle3 = document.getElementById('middle3')
const down = document.getElementById('down')
const box = document.getElementById('box')
function fun(event)
{
  var x = ((event.clientX * 100 / window.innerWidth)+7);
  var y = ((event.clientY * 100 / window.innerHeight)+7);
  if(x<95 && y<95)
  {
    box.style.top = y + "%";
    box.style.left = x + "%";
  }
  else
  {
   x=10;
    y=10;
    box.style.top = y + "%";
    box.style.left = x + "%";
  }
}
function fun5(event)
{
  var x = ((event.clientX * 100 / window.innerWidth)+10);
  var y = ((event.clientY * 100 / window.innerHeight)+10);
  if(x<95)
  {
    box.style.top = y + "%";
    box.style.left = x + "%";
  }
  else
  {
   x=10;
    y=10;
    box.style.top = y + "%";
    box.style.left = x + "%";
  }
}
function fun1(event)
{
  var x = ((event.clientX * 100 / window.innerWidth)+7);
  if(x<90)
  {
    box.style.left = x + "%";
  }
  else
  {
    x=10;
    box.style.left = x + "%";
  }
}
function fun2(event)
{
  var x = ((event.clientX * 100 / window.innerWidth)-7);
  if(x>0)
  {
    box.style.left = x + "%";
  }
  else
  {
    x=90;
    box.style.left = x + "%";
  }
}
function fun3(event)
{
  var x = ((event.clientX * 100 / window.innerWidth)-7);
  var y = ((event.clientY * 100 / window.innerHeight)-7);
  if(x>5)
  {
    box.style.top = y + "%";
    box.style.left = x + "%";
  }
  else
  {
      x=90;
      y=90;
      box.style.left = x + "%";
    box.style.top = y + "%"; 
  }
}
function f()
{
  alert("yey... you clicked it ")
}
