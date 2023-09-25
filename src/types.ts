export interface BillCounts {
    [denomination: number]: number;
}

export interface CashRegister {
    alertMessgae: string;
    alertColor: string;
    showAlert: boolean,
    denominations: number[];
    total: number;
    changeOptions?: BillCounts[];
    billCounts: BillCounts;
}

export interface CashRegisterHook {
    drawer: CashRegister;
    emptyRegister: () => void;
    dispenseChange : (change : BillCounts) => void ;
    addMoney: (denomination: number, count: number) => void;
    takeMoney: (denomination: number, count: number) => void;
    showChangeOptions: (changeAmount: number) => BillCounts[];
    hideAlert: () => void;
}