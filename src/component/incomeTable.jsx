import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function IncomeTable() {
    return (
        <>
            <h3>収入一覧</h3>
            <ul>
                {props.items.map((item, index) => (
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