
interface Props {
    amount: number;
    visible: boolean;
    hideAlert: Function
}
const Alert = ({ amount, visible, hideAlert}: Props) => {

    if(visible) return (
         (
            <div className="mx-4 relative p-4 mb-4 border rounded bg-red-200">
                <button
                    onClick={()=> hideAlert()}
                    className="absolute top-0 right-0 px-2 py-1 mr-2 text-red-700"
                >
                    X
                </button>
                Sorry there are not enough bills to dispense change for : ${amount}
            </div>
        )
    );
    else return null;
};

export default Alert;

