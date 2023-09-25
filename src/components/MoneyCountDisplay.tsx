import React from "react";
import { CashRegisterHook } from "../types";

interface Props {
    cashRegister: CashRegisterHook;
    emptyRegister: () => void
}

export default function MoneyCountDisplay({ cashRegister, emptyRegister }: Props) {
    return (
        <div className="grid">
            <div className='text-xl text-center'>Cash in drawer:</div>
            {Object.entries(cashRegister.drawer.moneyCounts).map(([key, value], index) => (
                <div className='text-center mt-2' key={'count-' + index}>
                    ${key} : {value}
                </div>
            ))}
            <div onClick={()=> emptyRegister()} className="text-xl text-center border bg-gray-700 m-4 cursor-pointer hover:bg-gray-600 text-white font-bold py-2 border-b-4 border-gray-700 hover:border-gray-500 rounded'">Reset Drawer</div>
        </div>

    )
}