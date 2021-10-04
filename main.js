const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const getNum1 = () => {
  
}

const getNum2 = () => {
  
}

const getNum3 = () => {
  
}

('#btn-add').addEventListener('click', ()=>{
  const result = getNum1() + getNum2();
  showResult(result);
});

('#btn-sub').addEventListener('click', ()=>{
  const result = getNum1() - getNum2();
  showResult(result);
});

('#btn-mul').addEventListener('click', ()=>{
  const result = getNum1() * getNum2();
  showResult(result);
});

('#btn-div').addEventListener('click', ()=>{
  const result = getNum1() / getNum2();
  showResult(result);
});