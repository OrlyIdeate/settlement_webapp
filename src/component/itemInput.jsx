import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function Iteminput() {
    
    const { expenses, setExpenses, incomes, setIncomes } = useContext(DataContext);

    const SubmitHandler = (event) => {
        event.preventDefault();
        const date = event.target[0].value;
        const description = event.target[1].value;
        const amount = event.target[2].value;
        const data = { date, description, amount };

        if (amount <= 0) {
            setExpenses([...expenses, data]);
        } else {
            setIncomes([...incomes, data]);
        }
    };

    return (
        <div>
            <form onSubmit={SubmitHandler()}>
                <h3>日付</h3>
                <input type="date" />
                <h3>内容</h3>
                <input type="text" />
                <h3>金額</h3>
                <input type="number" />
                <button type="submit">追加</button> 
            </form>
        </div>
    );
}