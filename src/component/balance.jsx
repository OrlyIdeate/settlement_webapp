import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function Balance() {
    const { balance } = useContext(DataContext);

    return (
        <div>
            <h2>収支: { balance } 円</h2>
        </div>
    );
    }