const bill = document.querySelector('#bill');
const numOfPeople = document.querySelector('#numOfPeople');
const custom_tip = document.querySelector('#custom_tip');
const buttons = document.querySelectorAll(".flex-container > button")
const tip_person = document.querySelector('#tip_person');
const tip_total = document.querySelector('#tip_total');
const reset = document.querySelector('#reset');

const calculate =(percentage)=>{
  const tipPerPerson=parseInt((percentage*bill.value)/100/numOfPeople.value);
  const totalPerPerson=(parseInt(bill.value)+(percentage*bill.value)/100)/numOfPeople.value;
  tip_person.innerHTML=Math.floor(tipPerPerson);
  tip_total.innerHTML=Math.floor(totalPerPerson);
}

for(let i =0; i < buttons.length ; i++){
 buttons[i].addEventListener("click",(e)=>{
  const percentage=e.target.value.replace("%","");
  calculate(percentage);
});
}
 
custom_tip.addEventListener("input", (e)=>{
  calculate(e.target.value);
});

reset.addEventListener("click", (e)=>{
  tip_person.innerHTML="";
  tip_total.innerHTML="";
  numOfPeople.value="";
  bill.value="";
  custom_tip.value="";
});

