import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function Balance() {
    const { balance } = useContext(DataContext);
    const color = balance > 0 ? '#2ecc71' : balance < 0 ? '#e74c3c' : '#000';

    return (
        <div>
            <h2 style={{ color: color }}>収支: { balance } 円</h2>
            {/* <h2 className={balance > 0 ? '#2ecc71' : '#e74c3c'}>収支: { balance } 円</h2> */}
        </div>
    );
    }