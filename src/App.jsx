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
        <DataProvider>
          <Balance />
          <Expense />
          <Income />
          <Iteminput />
          <ExpenseTable />
          <IncomeTable />
        </DataProvider>
    </>
  );
}
