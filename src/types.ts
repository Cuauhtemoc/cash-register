export interface MoneyCounts {
    [denomination: number]: number;
}

export interface CashRegister {
    alertMessgae: string;
    alertColor: string;
    showAlert: boolean,
    denominations: number[];
    total: number;
    changeOptions?: MoneyCounts[];
    moneyCounts: MoneyCounts;
}

export interface CashRegisterHook {
    drawer: CashRegister;
    emptyRegister: () => void;
    dispenseChange : (change : MoneyCounts) => void ;
    addMoney: (denomination: number, count: number) => void;
    takeMoney: (denomination: number, count: number) => void;
    showChangeOptions: (changeAmount: number) => MoneyCounts[];
    hideAlert: () => void;
}