import React, { useContext } from "react";
import CashRegisterDrawer from "./CashRegisterDrawer";
import useCashRegister from "../hooks/useCashRegister";
import CashRegisterDisplay from "./CashRegisterDisplay";

export default function CashRegister() {
    const cashRegister = useCashRegister();
    return (
        
        <div className="mx-4">
            <CashRegisterDisplay />
            <CashRegisterDrawer cashRegister={cashRegister} />
        </div>
    )
}