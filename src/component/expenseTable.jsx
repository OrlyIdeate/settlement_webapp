import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function ExpenseTable() {
    const { balance, setBalance, expense, setExpense, expenses, setExpenses } = useContext(DataContext);

    const handleDelete = (item, index) => {
        setBalance(balance - item.amount);
        setExpense(expense- item.amount);
        setExpenses(expenses.filter((item, i) => i !== index));
    };

    return (
        <>
            <h3>支出一覧</h3>
            <table border="1">
                <thead>
                    <tr><th>日付</th><th>内容</th><th>金額</th></tr>
                </thead>
                <tbody>
                    {expenses.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.description}</td>
                            <td>{item.amount}</td>
                            <td><button onClick={() => handleDelete(item, index)}>削除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    );
}