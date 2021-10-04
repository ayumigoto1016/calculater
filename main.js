const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnadd = document.getElementById('btn-add');
const btnsub = document.getElementById('btn-sub');
const btnmul = document.getElementById('btn-mul');
const btndiv = document.getElementById('btn-div');
const box = document.getElementById('box');

const getNum1 = () => {
  const number1 = Number.parseFloat(num1.value);
  return number1;

}

const getNum2 = () => {
  const number2 = Number.parseFloat(num2.value);
  return number2;
}

const showResult = (num) => {
  box.textContent = num;
}

btnadd.addEventListener('click', ()=>{
  const result = getNum1() + getNum2();
  showResult(result);
});

btnsub.addEventListener('click', ()=>{
  const result = getNum1() - getNum2();
  showResult(result);
});

btnmul.addEventListener('click', ()=>{
  const result = getNum1() * getNum2();
  showResult(result);
});

btndiv.addEventListener('click', ()=>{
  const result = getNum1() / getNum2();
  showResult(result);
});