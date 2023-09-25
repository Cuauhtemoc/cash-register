import { CashRegisterHook } from "../types";

interface Props {
    cashRegister: CashRegisterHook
}
const Alert = ({ cashRegister}: Props) => {
   
    if(cashRegister.drawer.showAlert) return (
         (
            <div className={`mx-4 relative p-4 mb-4 border rounded bg-${cashRegister.drawer.alertColor}-200`}>
                <button
                    onClick={()=> cashRegister.hideAlert()}
                    className={`absolute top-0 right-0 px-2 py-1 mr-2 text-${cashRegister.drawer.alertColor}-700`}
                >
                    X
                </button>
                {cashRegister.drawer.alertMessgae}
            </div>
        )
    );
    else return null;
};

export default Alert;

