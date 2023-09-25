import React, { useContext } from "react";
import CashRegisterDrawer from "./CashRegisterDrawer";
import useCashRegister from "../hooks/useCashRegister";
import CashRegisterDisplay from "./CashRegisterDisplay";
import ChangeDispenser from "./ChangeDispenser";
import Alert from "./Alert";
import MoneyCountDisplay from "./MoneyCountDisplay";

export default function CashRegister() {
    const cashRegister = useCashRegister();
    return (
        
        <div className="mx-4">
            
            <CashRegisterDisplay cashRegister={cashRegister} />
            <MoneyCountDisplay cashRegister={cashRegister} />
            <CashRegisterDrawer cashRegister={cashRegister} />
            <ChangeDispenser dispenseChange={cashRegister.showChangeOptions}/>
        </div>
    )
}