
import { UserTableModel } from "../../../data/UserTableModel";
import { useEffect, useState } from "react";

type EditUserSuccessProps = {
    userTableModel: UserTableModel;
    updatedName: string;
    onOkTap: () => void;
};

export default function EditUserSuccess({ userTableModel, updatedName, onOkTap }: EditUserSuccessProps) {

    const [modalRemainingTime, setModalRemainingTime] = useState(5);


    useEffect(() => {
        const timer = setInterval(() => {
            setModalRemainingTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    onOkTap();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [onOkTap]);

    return (
        <div className="buysuccess-root">
            <span className="material-icons-outlined buysuccess-icon" style={{ fontSize: 80 }}>
                check_circle_outline
            </span>

            <p className="buysuccess-title">Updated!</p>
            <p className="buysuccess-message">
                {userTableModel.name} changed to <strong>{updatedName}</strong> successfully.
            </p>

            <button onClick={onOkTap} className="buysuccess-ok-btn">
                OK
            </button>

            <p className="buysuccess-timer">Auto closing in {modalRemainingTime} seconds...</p>


        </div>
    )
}