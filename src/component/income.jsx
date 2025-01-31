import React, { useContext } from "react";
import { DataContext } from "../dataContext";

export default function Income() {
    const { income } = useContext(DataContext);
    const plus  = income == 0 ? null : "+";

    return (
        <div className='col'>
            <h2 className="income">収入: { plus + income } 円</h2>
        </div>
    )
}