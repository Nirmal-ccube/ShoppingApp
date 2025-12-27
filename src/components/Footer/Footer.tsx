import ContactInfo from "./ContactInfo";
import PageSectionLinks from "./PageSectionLinks";
import QuickLinks from "./QuickLinks";

export default function Footer() {
    return (
        <div className="footer-root">
            <div className="footer-section-main">
                <ContactInfo />
            </div>
            <div className="footer-section-side">
                <QuickLinks />
            </div>
            <div className="footer-section-side">
                <PageSectionLinks />
            </div>
        </div>
    )
}