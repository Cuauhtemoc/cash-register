import React from "react";

interface Props {
    demonination: number;
    addMoney: (demonination:number, amount: number) => void,
    takeMoney: (demonination:number, amount: number) => void,
}
export default function CashRegisterButton({ demonination, addMoney, takeMoney }: Props) {

    return (
        <div>
        <div className='bg-emerald-800 m-4 cursor-pointer hover:bg-grey-600 text-white font-bold py-2 px-4 border-b-4 border-emerald-700 hover:border-emerald-500 rounded'>
            <span onClick={() => addMoney(demonination, 1)} className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>{"Add: $" + demonination}</span>
        </div>
         <div className='bg-red-800 m-4 cursor-pointer hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded'>
         <span onClick={() => takeMoney(demonination, 1)} className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>{"Remove: $" + demonination}</span>
        </div>
        </div>
    )
}