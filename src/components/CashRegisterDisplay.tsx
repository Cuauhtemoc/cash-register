import React from "react";
import { CashRegisterHook } from "../types";

interface Props {

    cashRegister: CashRegisterHook
}

export default function CashRegisterDisplay() {
    return (
            <>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-600 border-[16px] rounded-t-xl">
                <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                </div>
            </div>
            </>
            )
}