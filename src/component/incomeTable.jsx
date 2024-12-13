import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function IncomeTable() {
    const { incomes } = useContext(DataContext);

    return (
        <>
            <h3>収入一覧</h3>
            <ul>
                {incomes.map((income, index) => (
                    <li key={index}>{income.date} - {income.description} - {income.amount}</li>
                ))}
            </ul>
        </>
    );
}