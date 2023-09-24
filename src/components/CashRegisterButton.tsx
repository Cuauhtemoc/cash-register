import React from "react";

interface Props {
    demonination: number;
    addMoney: Function,
    color: string
}
export default function CashRegisterButton({ demonination, addMoney, color }: Props) {

    return (
        <div className='bg-emerald-700 m-4 cursor-pointer hover:bg-emerald-400 text-white font-bold py-2 px-4 border-b-4 border-emerald-700 hover:border-emerald-500 rounded'>
            <span onClick={() => addMoney(demonination, 1)} className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>{"Add: $" + demonination}</span>
        </div>
    )
}