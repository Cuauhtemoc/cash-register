import React from "react";
import { CashRegisterHook } from "../types";
import CashRegisterButton from "./CashRegisterButton";

interface Props {
    cashRegister: CashRegisterHook;
}
export default function CashRegisterDrawer({ cashRegister }: Props) {

    return (
        <div className="grid grid-2 lg:grid-cols-5">
            {cashRegister.drawer.denominations.map((d: number) => {
                return (
                    <CashRegisterButton key={`add-${d}`} demonination={d} addMoney={cashRegister.addMoney} takeMoney={cashRegister.takeMoney}/>
                )
            })}
        </div>
    )
}