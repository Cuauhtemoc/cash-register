import useCashRegister from "../hooks/useCashRegister";
import { act, renderHook } from '@testing-library/react';

describe('Test useCashRegister hook', () => {

    it('should add money correctly', () => {
        const { result } = renderHook(() => useCashRegister());

        act(() => { result.current.addMoney(20, 2); });
        act(() => { result.current.addMoney(10, 4); });
        act(() => { result.current.addMoney(5, 6); });
        act(() => { result.current.addMoney(2, 4); });
        act(() => { result.current.addMoney(10, 1); });

        expect(result.current.drawer.total).toBe(128);

    });

    it('should take money correctly', () => {
        const { result } = renderHook(() => useCashRegister());

        act(() => { result.current.addMoney(20, 2); });
        act(() => { result.current.addMoney(10, 4); });
        act(() => { result.current.addMoney(5, 6); });
        act(() => { result.current.addMoney(2, 4); });
        act(() => { result.current.addMoney(10, 1); });
        act(() => { result.current.takeMoney(20, 1); });
        act(() => { result.current.takeMoney(10, 4); });
        act(() => { result.current.takeMoney(5, 3); });
        act(() => { result.current.takeMoney(1, 10); });


        expect(result.current.drawer.total).toBe(43);
    });

    it('should dispense change correctly', () => {
        const { result } = renderHook(() => useCashRegister());
        act(() => { result.current.addMoney(20, 2); });
        act(() => { result.current.addMoney(10, 6); });
        act(() => { result.current.addMoney(5, 4); });
        act(() => { result.current.addMoney(2, 4); });
        act(() => { result.current.addMoney(10, 1); });
        act(() => { result.current.takeMoney(20, 1); });
        act(() => { result.current.takeMoney(10, 4); });
        act(() => { result.current.takeMoney(5, 3); });
        act(() => { result.current.takeMoney(1, 10); });
        act(() => { result.current.showChangeOptions(11); });

        const expectedChangeOptions = [{ 1:0, 2:3, 5:1, 10:0, 20:0 }];
        expect(result.current.drawer.changeOptions).toEqual(expectedChangeOptions);

    });
    it('should return an empty array if there is not enough bills', () => {
        const { result } = renderHook(() => useCashRegister());
        act(() => { result.current.addMoney(20, 2); });
        act(() => { result.current.addMoney(10, 6); });
        act(() => { result.current.addMoney(5, 4); });
        act(() => { result.current.addMoney(2, 4); });
        act(() => { result.current.addMoney(10, 1); });
        act(() => { result.current.takeMoney(20, 1); });
        act(() => { result.current.takeMoney(10, 4); });
        act(() => { result.current.takeMoney(5, 3); });
        act(() => { result.current.takeMoney(1, 10); });
        act(() => { result.current.showChangeOptions(11); });
        act(() => { result.current.takeMoney(5, 1); });
        act(() => { result.current.takeMoney(2, 3); });
        act(() => { result.current.showChangeOptions(14); });
    
        expect(result.current.drawer.changeOptions).toEqual([]);

    });
});

