import { ProductModel } from "../../data/ProductModel";

type BuySuccessProps = {
    productModel: ProductModel;
    onOkTap: () => void;
};

export default function BuySuccess({productModel, onOkTap}: BuySuccessProps) {
    return (
        <div className="buysuccess-root">
            <span className="buysuccess-icon" style={{ fontSize: 80 }}>
                check_circle_outline
            </span>
            
            <p className="buysuccess-title">Congratulations! 🎉</p>
            <p className="buysuccess-message">
                <strong>{productModel.name}</strong> has been bought successfully.
            </p>

            <button onClick={onOkTap} className="buysuccess-ok-btn">
                OK
            </button>
        </div>
    )
}