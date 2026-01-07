import { ProductModel } from "../../data/ProductModel";

type BuyFailedProps = {
    productModel: ProductModel;
    onOkTap: () => void;
};

export default function BuyFailed({productModel, onOkTap}: BuyFailedProps) {
    return (
        <div className="buyfailed-root">
            <span className="buyfailed-icon"  style={{ fontSize: 60 }}>
                error_outline
            </span>
            
            <p className="buyfailed-title">
                Failed to buy {productModel.name}
            </p>
            <p className="buyfailed-message">
                Please try again in a few moments.
            </p>

            <button onClick={onOkTap} className="buyfailed-ok-btn">
                Ok
            </button>
        </div>
    )
}