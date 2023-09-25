import React from "react";
import { CashRegisterHook, MoneyCounts } from "../types";

interface Props {
    cashRegister: CashRegisterHook
}

export default function MoneyCountDisplay({ cashRegister }: Props) {
    return (
        <div className="grid">
            <div className='text-xl text-center'>Cash in drawer:</div>

            <div className="grid grid-col-5">
                {Object.entries(cashRegister.drawer.moneyCounts).map(([key, value], index) => (
                    <div className={'text-center border-l border-black'} key={'count-'+index}>
                        ${key} : {value}
                    </div>
                ))}
            </div>

        </div>

    )
}