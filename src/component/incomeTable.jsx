import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function IncomeTable() {
    const { balance, setBalance, income, setIncome, incomes, setIncomes } = useContext(DataContext);

    const handleDelete = (item, index) => {
        setBalance(balance - item.amount);
        setIncome(income - item.amount);
        setIncomes(incomes.filter((item, i) => i !== index));
    };

    return (
        <>
            <h3>収入一覧</h3>
            <table border="1">
                <thead>
                    <tr><th>日付</th><th>内容</th><th>金額</th></tr>
                </thead>
                <tbody>
                    {incomes.map((item, index) => (
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