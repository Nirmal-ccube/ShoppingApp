import { forwardRef, useImperativeHandle, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { TextField } from "@mui/material";
import { UserTableModel } from "../../../data/UserTableModel";


type EditUserModalProps = {
  userTableModel: UserTableModel;
  onUpdateTap: (name: string) => boolean;
  onCancelTap: () => void;
};

export interface EditUserModalHandle {
  open: () => void;
  close: () => void;
}

const EditUserModal = forwardRef<EditUserModalHandle, EditUserModalProps>(
    ({userTableModel, onUpdateTap, onCancelTap}, ref) => {

        const dialogRef = useRef<HTMLDialogElement>(null); 

        const [name, setName] = useState(userTableModel.name);

        const [errors, setErrors] = useState<{name?: string;}>({});
        const [isEditDone, setEditDone] = useState<boolean | null>(null);

        useImperativeHandle(ref, ()=> ({
            open() {
                if (dialogRef.current) {
                    dialogRef.current.showModal();
                }
            },
            close() {
                if (dialogRef.current) {
                    dialogRef.current.close();
                }
            },
        }), [])

        const validate = () => {
            const newErrors: {name?: string;} = {};

            if (!name.trim()) {
                newErrors.name = "Name is required";
            }

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        }

        const handleUpdateSubmit = () => {

            if (!validate()) {
                return;
            }
            const onUpdateSuccess = onUpdateTap(name.trim());
            setEditDone(onUpdateSuccess)
        };

        const handleClose = () => {
            dialogRef.current?.close();
            onCancelTap?.();  // Execute close action
        };

        return createPortal(
        <dialog ref={dialogRef}
            className="buymodal-dialog"
            onClose={handleClose}>
            {/* Fullscreen overlay */}
            <div className="buymodal-overlay" onClick={handleClose}>
                {/* Modal Box */}
                <div className="buymodal-box" onClick={(e) => e.stopPropagation()}>
                    {
                        isEditDone == null && (
                            //show edit field
                            <>
                            

                            <h2 className="buymodal-title">Edit data</h2>

                            <form className="buymodal-form" onClick={(e) => e.stopPropagation()} onSubmit={(e) => e.preventDefault()}>
                                <TextField
                                    label="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    error={Boolean(errors.name)}
                                    helperText={errors.name ?? ""}
                                    />

                                    <div className="buymodal-actions">
                            <button
                                type="button"
                                onClick={handleUpdateSubmit}
                                className="buymodal-buy-btn"
                            >
                                Buy Now
                            </button>

                            <button
                                type="button"
                                onClick={handleClose}
                                className="buymodal-cancel-btn"
                            >
                                Close
                            </button>
                            </div>
                            </form>
                            </>
                        )
                    }

                    { isEditDone == true && (
                        //Edit success
                        <>Edit success
                        </>
                    )}

                    { isEditDone == false && (
                        //Edit failed
                        <>Edit failed
                        </>
                    )}
                </div>
            </div>
        </dialog>,
      document.getElementById("modal")!
    );}
);


EditUserModal.displayName = "EditUserModal";

export default EditUserModal;