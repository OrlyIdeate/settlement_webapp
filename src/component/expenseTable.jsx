import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function ExpenseTable() {
    const { expenses } = useContext(DataContext);

    return (
        <>
            <h3>支出一覧</h3>
            <ul>
                {expenses.map((item, index) => (
                    <li key={index}>{item.date} - {item.description} - {item.amount}</li>
                ))}
            </ul>
            
        </>
    );
}