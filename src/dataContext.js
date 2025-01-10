import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [balance, setBalance] = useState(0);
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    
    return (
        <DataContext.Provider value={{ balance, setBalance, expense, setExpense, income, setIncome, expenses, setExpenses, incomes, setIncomes }}>
            {children}
        </DataContext.Provider>
    );
    }