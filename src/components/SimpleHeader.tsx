import { useNavigate } from "react-router-dom"

export default function SimpleHeader() {
    const navigate = useNavigate();

    return (
        <div className="simpleheader-root">
            <span
                className="material-icons-outlined simpleheader-home-icon"
                onClick={() => navigate('/')}
            >
                home
            </span>
        </div>
    )
}
