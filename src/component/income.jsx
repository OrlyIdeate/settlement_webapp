import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function Income() {
    const { income } = useContext(DataContext);

    return (
        <div>
            <h2>収入: { income } 円</h2>
        </div>
    )
}