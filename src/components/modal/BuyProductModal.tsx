import { createPortal } from "react-dom"
import { ProductModel } from "../../data/ProductModel"
import { useImperativeHandle, useRef, forwardRef } from "react"


type BuyProductModalProps = {
  productModel: ProductModel;
  onBuyTap: () => void;
};

export interface BuyProductModalHandle {
  open: () => void;
  close: () => void;
}


const BuyProductModal = forwardRef<BuyProductModalHandle, BuyProductModalProps>(
  ({ productModel, onBuyTap }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null); 

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

    const handleBuySubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onBuyTap();
      // Dialog auto-closes due to formmethod="dialog"
    };

    const handleClose = () => {
      dialogRef.current?.close();
      onClose?.();  // Execute close action
    };

    return createPortal(
      <dialog
        ref={dialogRef}
        className="p-0 border-none bg-transparent"
      >
        {/* Fullscreen overlay */}
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* Modal Box */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Buy {productModel.name}</h2>

            <form method="dialog" onSubmit={handleBuySubmit} className="flex gap-2">
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
            </form>
          </div>
        </div>
      </dialog>,
      document.getElementById("modal")
    );}
);

BuyProductModal.displayName = "BuyProductModal";

export default BuyProductModal;