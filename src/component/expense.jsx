import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function Expense() {
    const { expense } = useContext(DataContext)

    return (
        <div>
            <h2>支出: { expense } 円</h2>
        </div>
    );
    }