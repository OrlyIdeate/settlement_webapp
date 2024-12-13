import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function ExpenseTable() {
    const { expenses } = useContext(DataContext);

    return (
        <>
            <h3>支出一覧</h3>
            <ul>
                {expenses.map((item, index) => (
                    <li key={index}>
                        <span>{item.date}</span>
                        <span>{item.description}</span>
                        <span>{item.amount}</span>
                    </li>
                ))}
            </ul>
            
        </>
    );
}