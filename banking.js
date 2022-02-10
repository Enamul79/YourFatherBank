//handle deposite button event
document.getElementById('Deposit-button').addEventListener('click',function(){
   //get the amount deposited

   // console.log('Deposite-button click');
   const depositInput = document.getElementById('Deposit-input');
   const newDepositAmount = depositInput.value;
   // console.log(depositAmount);

   //update depositTotal
   const depositTotal = document.getElementById('deposit-total');
   // console.log(depositTotal.value);
   // console.log(depositTotal.innerText);
   const previousDepositAmount = depositTotal.innerText;
   // const newDepositTotal = previousDepositAmount + newDepositAmount; 
   const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount); 
   depositTotal.innerText = newDepositTotal;

   //update amount balance

      const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat( balanceTotalText);
      const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
      balanceTotal.innerText = newBalanceTotal;

      depositInput.value = '';//clear the deposit input field

})

// handle withdraw event handler;
document.getElementById('Withdraw-button').addEventListener('click',function(){
//   console.log('withdraw click');

const withdrawInput = document.getElementById('withdraw-input');
const withdrawAmountText = withdrawInput.value;
const newWithdrawAmount = parseFloat(withdrawAmountText);
console.log(withdrawAmountText);

//set withdraw total;
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withdrawTotal.innerText; 
const previousWithdrawTotal = parseFloat(previousWithdrawText);
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;
//update balance;
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
balanceTotal.innerText = newBalanceTotal;

withdrawInput.value = '';//clear the deposit input field

})

