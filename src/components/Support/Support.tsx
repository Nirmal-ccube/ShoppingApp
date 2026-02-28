import SimpleHeader from "../SimpleHeader"

export default function Support() {

    return (
        <div className="support-root">
            <SimpleHeader />
            <div className="support-content">
                <img src="/shopping_app_icon.svg" alt="App Icon" className="support-logo" />
                <h1 className="support-title">Support</h1>
                <p className="support-subtitle">Our support center is currently under development.</p>
                <div className="support-card">
                    <p className="support-card-title">For any support or assistance</p>
                    <div className="support-card-links">
                        <a href="tel:+919800000000" className="support-link-btn">
                            <span className="support-link-icon">📞</span>
                            <span className="support-link-text">Call on +919800000000</span>
                        </a>
                        <a href="mailto:support@shoppingapp.com" className="support-link-btn">
                            <span className="support-link-icon">✉️</span>
                            <span className="support-link-text">Email us on support@shoppingapp.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
