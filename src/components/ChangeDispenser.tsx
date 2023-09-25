import React, { useState } from "react";
import { MoneyCounts } from "../types";

interface Props{
    showChangeOptions: (amount:number) => MoneyCounts[];
 
}
export default function ChangeDispenser({showChangeOptions} : Props) {
    
    const [amount, setAmount] = useState(0);


    const onSubmit = (e: any) => {
        e.preventDefault()
        showChangeOptions(amount);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="grid gap-6 mb-6">
                <div>
                    <label className="block mb-2 mx-4 text-sm font-medium text-gray-900 dark:text-white">Total Purchase</label>
                    <input id="change-dispenser" onChange={(e) => setAmount(parseInt(e.target.value)) } className="bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100" required />
                </div>
                <button className="bg-emerald-800 m-4 cursor-pointer hover:bg-emerald-600 text-white font-bold py-2 px-4 border-b-4 border-emerald-700 hover:border-emerald-500 rounded">Show options for change</button>
            </div>
         
        </form>
    )
}