import { createPortal } from "react-dom"
import { ProductModel } from "../../../data/ProductModel"
import { useImperativeHandle, useRef, forwardRef } from "react"
import { useState } from "react";
import { TextField } from "@mui/material";
import BuySuccess from "./BuySuccess";
import BuyFailed from "./BuyFailed";


type BuyProductModalProps = {
  productModel: ProductModel;
  onBuyTap: (name: string, email:string) => boolean;
  onCancelTap: () => void;
};

export interface BuyProductModalHandle {
  open: () => void;
  close: () => void;
}


const BuyProductModal = forwardRef<BuyProductModalHandle, BuyProductModalProps>(
  ({ productModel, onBuyTap, onCancelTap }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null); 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [isBuySuccess, setBuySuccess] = useState<boolean | null>(null);

    useImperativeHandle(ref, () => ({
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
    }), []);

    const validate = () => {
      const newErrors: { name?: string; email?: string } = {};

      if (!name.trim()) {
        newErrors.name = "Name is required";
      }

      if (!email.trim()) {
        newErrors.email = "Email is required";
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(email)) {
          newErrors.email = "Invalid email format";
        }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleBuySubmit = () => {

      if (!validate()) {
        return;
      }
      const onBuySuccess = onBuyTap(name.trim(), email.trim());
      setBuySuccess(onBuySuccess)
    };

    const handleClose = () => {
      dialogRef.current?.close();
      onCancelTap?.();  // Execute close action
    };

    return createPortal(
      <dialog
        ref={dialogRef}
        className="buymodal-dialog"
        onClose={handleClose}
      >
        {/* Fullscreen overlay */}
        <div className="buymodal-overlay" onClick={handleClose}>
          {/* Modal Box */}
          <div className="buymodal-box" onClick={(e) => e.stopPropagation()}>
            
            {
              isBuySuccess == null && (
                <>
                  <h2 className="buymodal-title">Buy {productModel.name}</h2>

                  <form className="buymodal-form" onClick={(e) => e.stopPropagation()} onSubmit={(e) => e.preventDefault()}>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={Boolean(errors.name)}
                        helperText={errors.name ?? ""}
                      />

                      <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={Boolean(errors.email)}
                        helperText={errors.email ?? ""}
                      />

                    <div className="buymodal-actions">
                      <button
                        type="button"
                        onClick={handleBuySubmit}
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
            
            { isBuySuccess == true && <BuySuccess productModel={productModel} onOkTap={handleClose}/> }
              
            { isBuySuccess == false && <BuyFailed productModel={productModel} onOkTap={handleClose} /> }

          </div>
        </div>
      </dialog>,
      document.getElementById("modal")!
    );}
);

BuyProductModal.displayName = "BuyProductModal";

export default BuyProductModal;