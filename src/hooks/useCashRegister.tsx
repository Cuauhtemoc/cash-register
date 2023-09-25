import { useState } from 'react';
import { CashRegister, CashRegisterHook, BillCounts } from '../types';

const useCashRegister = (): CashRegisterHook => {
    
    const [drawer, setCashRegister] = useState<CashRegister>({
        alertMessgae: "",
        alertColor: '',
        showAlert: false,
        denominations:[1,2,5,10,20],
        total: 0,
        changeOptions : [],
        billCounts: {
            20: 0,
            10: 0,
            5: 0,
            2: 0,
            1: 0,
        },

    });
    //reset the register
    const emptyRegister = () => {
        setCashRegister({
            alertMessgae: "",
            alertColor: '',
            showAlert: false,
            denominations:[20,10,5,2,1],
            total: 0,
            changeOptions : [],
            billCounts: {
                20: 0,
                10: 0,
                5: 0,
                2: 0,
                1: 0,
            },
        })
    }
    //helper function to update the count of the specific denomination
    const updateRegisterCounts = (denomination: number, count: number): BillCounts => {
        return {
            ...drawer.billCounts,
            [denomination]: drawer.billCounts[denomination] + count,
        };
    };
    const addMoney = (denomination: number, count: number): void => {
        const updatedCounts = updateRegisterCounts(denomination, count);
        setCashRegister((prevCashRegister) => ({
            ...prevCashRegister,
            total: prevCashRegister.total + denomination * count,
            billCounts: updatedCounts,
        }));
    };
    const hideAlert = () : void => {
        setCashRegister((prevCashRegister) => ({
            ...prevCashRegister,
            showAlert : false
        }));
    }
    const takeMoney = (denomination: number, count: number): void => {
        const updatedCounts = updateRegisterCounts(denomination, -count);
        setCashRegister((prevCashRegister) => ({
            ...prevCashRegister,
            total: prevCashRegister.total - denomination * count,
            billCounts: updatedCounts,
        }));
    };
  
    const dispenseChange = (change : BillCounts) => {
        let currentTotal = drawer.total;
        let currentCounts = {...drawer.billCounts}

        for(const [denomination, count] of Object.entries(change) ){
            //parse the entries to int so we can use them
            const denominationNumber = parseInt(denomination, 10); 
            const countNumber = parseInt(count, 10); 
            currentCounts[denominationNumber] -= countNumber;
            currentTotal -= denominationNumber * countNumber;
            
        }  
        //after we have removed the money we need to update the drawer with the new counts and total
        setCashRegister((prevCashRegister) => ({
            ...prevCashRegister,
            total: currentTotal,
            billCounts: {...currentCounts},
            changeOptions: [],
            alertColor:'#52CC7A',
            alertMessgae: "Change chosen",
            showAlert: true
        }));
    }
    const showChangeOptions = (target: number) : BillCounts[] => {
        //copy the contents of our register as we don't want to actually modify the contents yet
        const availableBills = { ...drawer.billCounts };
        //represents the what bills can be included in out change
        const candidates = [20, 10, 5, 2, 1];
        const result: BillCounts[] = [];
        //template to make sure the change options are all formatted correcttly
        const changeTemplate = {
            1: 0,
            10 : 0, 
            5 : 0, 
            2: 0,
            20 : 0
        }
        //using a backtrack solution here to find all possible ways the change can be dispensed
        const backtrack = (currentChange: BillCounts, index: number, remainingAmount: number) => {
            //combination found push it to the results array 
            if (remainingAmount === 0) {
                result.push({ ...changeTemplate, ...currentChange });
                return;
            }
            //we are out of bounds so discard this combination 
            if (index >= candidates.length || remainingAmount < 0) {
                return;
            }

            const currentDenomination = candidates[index];
            //constrain our loop to the available moneys in the register
            for (let count = availableBills[currentDenomination]; count >= 0; count--) {
                //make sure there is money to take 
                if (count > 0) {
                    //make sure to update the current money as we take it to determine the correct change
                    currentChange[currentDenomination] = count;
                }

                //subtract from our target change
                const newRemainingAmount = remainingAmount - count * currentDenomination;

                backtrack(currentChange, index + 1, newRemainingAmount);

                //clean up step to remove the last demonination we used but did the work in the combination
                if (count > 0) {
                    delete currentChange[currentDenomination];
                }
            }
        };

        backtrack({}, 0, target);
        //if there is a solution update the register to show the available options
      
        setCashRegister((prevCashRegister) => ({
            ...prevCashRegister,
            changeOptions: [...result]
        }));

        //set the alerts
        if(result.length > 0){
            drawer.alertColor = "#add8e6";
            drawer.alertMessgae = "Change dispensed"
            drawer.showAlert = true;
        }
        else {
            drawer.alertColor = "#FFCCCB";
            drawer.alertMessgae = "Sorry there are not enough bills to dispense change for : $" + target;
            drawer.showAlert = true;
        }
        return result;
    }
    return {
        drawer,
        dispenseChange,
        emptyRegister,
        addMoney,
        takeMoney,
        showChangeOptions,
        hideAlert
    };
};

export default useCashRegister;
