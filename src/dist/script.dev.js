"use strict";

// id for set budget 
var budget_input = document.getElementById("budget-input");
var set_budget = document.getElementById("set-budget");
var total_budget_value = document.getElementById("total-budget-value");
var new_budget = document.getElementById("new-budget"); //  id for expenses  

var tittle_product = document.getElementById("tittle-product");
var cost_product = document.getElementById("cost-product");
var check_amount = document.getElementById("check-amount");
var expenses_list_items = document.getElementById("expenses-list-items");
var total_expenses_value = document.getElementById("total-expenses-value");
var total_balance_value = document.getElementById("total-balance-value");
var remaining_amount = document.getElementById("remaining-amount"); //  function for set budget 

set_budget.addEventListener("click", function () {
  if (budget_input.value == "") {
    alert("Please enter a budget!");
    return;
  }

  total_balance_value.innerText = budget_input.value;
  total_budget_value.innerText = budget_input.value;
  budget_input.value = "";
}); //  function for add new expense

check_amount.addEventListener("click", function () {
  if (parseInt(total_balance_value.innerText) < parseInt(cost_product.value)) {
    alert("Insufficient balance!");
    return;
  } else if (cost_product.value == "" || tittle_product.value == "") {
    alert("Please fill both fields!");
    return;
  }

  total_expenses_value.innerText = parseInt(total_expenses_value.innerText) + parseInt(cost_product.value);
  total_balance_value.innerText = parseInt(total_balance_value.innerText) - parseInt(cost_product.value);
  expenses_list_items.innerHTML += " <li>".concat(tittle_product.value, " <span class=\"cost\">").concat(cost_product.value, "</span> <span class=\"del\">delete</li>");
  remaining_amount.innerText = "Now you have Remaining Amount is ".concat(parseInt(total_balance_value.innerText));
  tittle_product.value = "";
  cost_product.value = "";
});

var delete_item = function delete_item(e) {
  if (e.target.innerHTML = "delete") {
    expenses_list_items.removeChild(e.target.parentElement);
    total_expenses_value.innerText = parseInt(total_expenses_value.innerText) - parseInt(e.target.previousElementSibling.innerHTML);
    total_balance_value.innerText = parseInt(total_balance_value.innerText) + parseInt(e.target.previousElementSibling.innerHTML);
    remaining_amount.innerText = "Now you have Remaining Amount is ".concat(parseInt(total_balance_value.innerText));
  }
};

expenses_list_items.addEventListener("click", delete_item);
new_budget.addEventListener("click", function () {
  total_budget_value.innerText = 0;
  total_balance_value.innerText = 0;
  total_expenses_value.innerText = 0;
  expenses_list_items.innerHTML = "";
  remaining_amount.innerText = "";
});