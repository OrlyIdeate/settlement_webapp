import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function Iteminput() {

    const { balance, setBalance, expense, setExpense, income, setIncome, expenses, setExpenses, incomes, setIncomes } = useContext(DataContext);

    const SubmitHandler = (event) => {
        event.preventDefault();
        const date = event.target[0].value;
        const description = event.target[1].value;
        const amount = event.target[2].value;
        const data = { date, description, amount };

        // amountが0以下の場合はexpensesに追加、それ以外はincomesに追加
        if (amount <= 0) {
            setExpenses([...expenses, data]);
            setExpense(expense + Number(amount));
        } else {
            setIncomes([...incomes, data]);
            setIncome(income + Number(amount));
        };

        setBalance(balance + Number(amount));
    };

    return (
        <div>
            <form onSubmit={SubmitHandler} className="row">
                <h3>日付</h3>
                <input type="date" />
                <h3>内容</h3>
                <input type="text" />
                <h3>金額</h3>
                <input type="number" />
                <button className="add" type="submit">追加</button> 
            </form>
        </div>
    );
}