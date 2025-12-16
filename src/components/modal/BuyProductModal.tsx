import { createPortal } from "react-dom"
import { ProductModel } from "../../data/ProductModel"
import { useImperativeHandle, useRef, forwardRef } from "react"
import { useState } from "react";
import { TextField } from "@mui/material";


type BuyProductModalProps = {
  productModel: ProductModel;
  onBuyTap: (name: string, email:string) => void;
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

    const handleBuySubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!validate()) {
        return;
      }
      onBuyTap(name.trim(), email.trim());
      dialogRef.current?.close();
    };

    const handleClose = () => {
      dialogRef.current?.close();
      onCancelTap?.();  // Execute close action
    };

    return createPortal(
      <dialog
        ref={dialogRef}
        className="p-0 border-none bg-transparent"
        onClose={handleClose}
      >
        {/* Fullscreen overlay */}
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* Modal Box */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Buy {productModel.name}</h2>

            <form method="dialog" onSubmit={handleBuySubmit} className="flex flex-col gap-5">

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

              <div className="flex justify-center gap-3">
                <button
                  type="submit"
                  formMethod="dialog"
                  className="bg-blue-600 text-white px-6 py-2 rounded-xl"
                >
                  Buy Now
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-200 px-6 py-2 rounded-xl"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>,
      document.getElementById("modal")!
    );}
);

BuyProductModal.displayName = "BuyProductModal";

export default BuyProductModal;