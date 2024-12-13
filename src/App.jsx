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
    <>
        <h1>家計簿</h1>
        <Balance value="1000" />
        <Expense value="500" />
        <Income value="1500" />
        <DataProvider>
          <Iteminput />
          <ExpenseTable />
          <IncomeTable />
        </DataProvider>
    </>
  );
}
