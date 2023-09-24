import React from "react";
import useCashRegister from "../hooks/useCashRegister";

export default function CashRegisterDrawer() {
    const { cashRegister, addMoney, takeMoney, dispenseChange} = useCashRegister();
    return (
        <div>
            
            <div className="flex grid">
                <div>{cashRegister.total}</div>
                <button onClick={() => addMoney(20, 1)}>Add 20</button>
                <button onClick={() => addMoney(10, 1)}>Add 10</button>
                <button onClick={() => addMoney(5, 1)}>Add 5</button>
                <button onClick={() => addMoney(2, 1)}>Add 2</button>
                <button onClick={() => addMoney(1, 1)}>Add 1</button>
                <button onClick={() => takeMoney(20, 1)}>remove 20</button>
                <button onClick={() => dispenseChange(11)}>calc 11</button>
                {cashRegister.changeOptions?.map(change => <div>{Object.keys(change)}</div>)}
            </div>


        </div>
    )
}