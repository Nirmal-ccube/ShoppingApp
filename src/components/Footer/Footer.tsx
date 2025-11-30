import ContactInfo from "./ContactInfo";
import PageSectionLinks from "./PageSectionLinks";
import QuickLinks from "./QuickLinks";

export default function Footer() {
    return (
        <div className="flex bg-indigo-300 justify-between p-10">
            <div className="w-[50%] px-4">
                <ContactInfo />
            </div>
            <div className="w-[25%]">
                <QuickLinks />
            </div>
            <div className="w-[25%]">
                <PageSectionLinks />
            </div>
        </div>
    )
}