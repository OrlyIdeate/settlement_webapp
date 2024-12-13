import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    
    return (
        <DataContext.Provider value={{ expenses, setExpenses, incomes, setIncomes }}>
            {children}
        </DataContext.Provider>
    );
    }