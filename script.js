const incomeForm = document.getElementById("income-form")
const incomeAmount=document.getElementById("income-amount")
 const expenseForm=document.getElementById("expense-form")
 const expenseAmount=document.getElementById("expense-amount")
 const expenseDesc=document.getElementById("expenseDesc")
 //const expenseCategory=document.getElementById("expense-category")
 const displayIncome=document.getElementById("displayIncome")
 const balanceElement =document.getElementById("balance")
 const expensestableBody = document.getElementById('expense-table-body');
 const totalAmountCell=document.getElementById("total-amount");
 const totalExpenses = document.getElementById("expense-amount")
 

     let income=0;
     let expenses=[]

     //income- eventlistener

     incomeForm.addEventListener("submit",(e)=>{
      e.preventDefault();
      income=parseInt(incomeAmount.value)
      
      incomeAmount.value=""
      displayIncome.textContent=`Income is RS ${income}`
     
     })
     
 // Expense =eventListener
 expenseForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const expense ={
        description:expenseDesc.value,
        amount:parseInt(expenseAmount.value)
       //expenseCategory:Category.value
       
    }
    expenses.push(expense)
    expenseDesc.value=""
    expenseAmount.value=""
   
    //Category.value="food"
     updateBalance()
   })
  expenseForm.addEventListener('submit',(e)=> {
    e.preventDefault(); 
   const category = document.getElementById('expense-category').value;
   //const amount = parseInt(document.getElementById('expense-amount').value);
   const amount = Number(expenseAmount.value);
   
   
   //console.log(category)
    
   const newRow = document.createElement('tr');
   const categoryCell = document.createElement('td');
    categoryCell.textContent = category;
    newRow.appendChild(categoryCell);

    const amountCell = document.createElement('td');
    amountCell.textContent =  amount.toFixed(2); 
    
    newRow.appendChild(amountCell);
    
    expensestableBody.appendChild(newRow);
    
   document.getElementById('expense-category').value = '';
    document.getElementById(`expense-amount`).value=``;
})




   // Budge-Summary-update

   const updateBalance = ()=>{
    const totalExpenses = expenses.reduce((sum,expense)=>sum+expense.amount,0)
      //console.log(totalExpenses) 
   const balance =income-totalExpenses
    balanceElement.textContent=`Balance is RS ${balance}`

   };
