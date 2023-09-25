import React, { useContext } from "react";
import CashRegisterDrawer from "./CashRegisterDrawer";
import useCashRegister from "../hooks/useCashRegister";
import CashRegisterDisplay from "./CashRegisterDisplay";
import ChangeDispenser from "./ChangeDispenser";
import MoneyCountDisplay from "./MoneyCountDisplay";
import Alert from "./Alert";

//cash register will consist of:
// a display for the total and the options for change,
// an area to display the current contents of the drawer
// an area to remove and add money
// an area to input and request change from the drawer
export default function CashRegister() {
    const cashRegister = useCashRegister();
    return (
        
        <div className="mx-4">
            <CashRegisterDisplay cashRegister={cashRegister} />
            <MoneyCountDisplay emptyRegister={cashRegister.emptyRegister} cashRegister={cashRegister} />
            <CashRegisterDrawer cashRegister={cashRegister} />
            <ChangeDispenser showChangeOptions={cashRegister.showChangeOptions}/>
            <Alert cashRegister={cashRegister} />
        </div>
    )
}