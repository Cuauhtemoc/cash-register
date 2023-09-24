import { useState } from 'react';
import { CashRegister, CashRegisterHook, MoneyCounts } from '../types';

const useCashRegister = (): CashRegisterHook => {
    
    const [drawer, setCashRegister] = useState<CashRegister>({
        denominations:[20,10,5,2,1],
        total: 0,
        changeOptions : [{
            1:1
        }],
        moneyCounts: {
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
            denominations:[20,10,5,2,1],
            total: 0,
            changeOptions : [],
            moneyCounts: {
                20: 0,
                10: 0,
                5: 0,
                2: 0,
                1: 0,
            },
        })
    }
    //helper function to update the count of the specific denomination
    const updateRegisterCounts = (denomination: number, count: number): MoneyCounts => {
        return {
            ...drawer.moneyCounts,
            [denomination]: drawer.moneyCounts[denomination] + count,
        };
    };
    const addMoney = (denomination: number, count: number): void => {
        const updatedCounts = updateRegisterCounts(denomination, count);
        setCashRegister((prevCashRegister) => ({
            ...prevCashRegister,
            total: prevCashRegister.total + denomination * count,
            moneyCounts: updatedCounts,
        }));
    };

    const takeMoney = (denomination: number, count: number): void => {
        const updatedCounts = updateRegisterCounts(denomination, -count);
        setCashRegister((prevCashRegister) => ({
            ...prevCashRegister,
            total: prevCashRegister.total - denomination * count,
            moneyCounts: updatedCounts,
        }));
    };

    const dispenseChange = (target: number) => {
        console.log('test');
        //copy the contents of our register as we don't want to actually modify the contents yet
        const availableBills = { ...drawer.moneyCounts };
        //represents the what bills can be included in out change
        const candidates = [20, 10, 5, 2, 1];
        const result: MoneyCounts[] = [];
        //using a backtrack solution here to find all possible ways the change can be dispensed
        const backtrack = (currentChange: MoneyCounts, index: number, remainingAmount: number) => {
            //combination found push it to the results array 
            if (remainingAmount === 0) {
                result.push({ ...currentChange });
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
        
    }
    return {
        drawer,
        emptyRegister,
        addMoney,
        takeMoney,
        dispenseChange,
    };
};

export default useCashRegister;
