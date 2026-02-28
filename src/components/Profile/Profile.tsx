import SimpleHeader from "../SimpleHeader";

export default function Profile() {

    return (
        <div className="profile-root">
            <SimpleHeader />
            <div className="profile-content">
                <div className="profile-logo-wrapper">
                    <img src="/shopping_app_icon.svg" alt="App Icon" className="profile-logo" />
                </div>
                <h1 className="profile-title">My Profile</h1>
                <p className="profile-subtitle">The user profile dashboard is currently under development. Stay tuned!</p>
                <div className="profile-badge">
                    Coming Soon
                </div>
            </div>
        </div>
    )
}
