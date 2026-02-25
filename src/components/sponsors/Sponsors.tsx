import SponsorsItem from "./SponsorsItem"
import { SponsorsRepository } from "../../data/SponsorsRepository"


export default function Sponsors() {

    const sponsors = SponsorsRepository.getAllSponsors();

    return (
        <div className="sponsors-root">
            <p className="sponsors-title"> Sponsors</p>

            <div className="sponsors-list  scrollbar-hide">
                <div className="sponsors-items">
                    {
                        sponsors.map((item, index) => {
                            return (<div key={index} className="sponsors-item-container">
                                <SponsorsItem sponsor={item} />
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}