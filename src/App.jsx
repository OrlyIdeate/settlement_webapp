import React from "react";
import Balance from "./component/balance";
import Expense from "./component/expense";
import Income from "./component/income";
import Iteminput from "./component/itemInput";
import ExpenseTable from "./component/expenseTable";
import IncomeTable from "./component/incomeTable";
import { DataProvider } from "./dataContext";

export default function App() {


  return (
    <div className="container">
        <h1>家計簿</h1>
        <DataProvider>
          <Balance />
          <div className="row">
            <Expense />
            <Income />            
          </div>
          <Iteminput />
          <div className="row">
            <ExpenseTable />
            <IncomeTable />            
          </div>
        </DataProvider>
    </div>
  );
}
