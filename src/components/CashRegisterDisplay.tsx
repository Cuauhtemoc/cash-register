import React from "react";
import { CashRegisterHook } from "../types";
import Total from "./Total";
import AvailableChangeOptions from "./AvailableChangeOptions";

interface Props {
    cashRegister: CashRegisterHook
}
export default function CashRegisterDisplay({ cashRegister }: Props) {
    return (
        <>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-400 border-[16px] rounded-t-xl">
                <div className="grid rounded-xl overflow-scroll h-[140px] md:h-[500px]">
                    <Total total={cashRegister.drawer.total}/>
                    <AvailableChangeOptions options={cashRegister.drawer.changeOptions} dispenseChange={cashRegister.dispenseChange}/>
                </div>
            </div>
      
            </>
            )
}