import { useState, useEffect } from "react";
import SponsorsItem from "./SponsorsItem";
import { SponsorsRepository } from "../../data/SponsorsRepository";
import { SponsorsModel } from "../../data/SponsorsModel";


export default function Sponsors() {

    const [sponsors, setSponsors] = useState<SponsorsModel[]>([]);

    useEffect(() => {
        setSponsors(SponsorsRepository.getAllSponsors());
    }, []);

    return (
        <div className="sponsors-root">
            {sponsors.length > 0 && <p className="sponsors-title"> Sponsors</p>}

            <div className="sponsors-list  scrollbar-hide">
                <div className="sponsors-items">
                    {
                        sponsors.length === 0 ? (
                            <div className="empty-message">No sponsors available</div>
                        ) : (
                            sponsors.map((item, index) => {
                                return (<div key={index} className="sponsors-item-container">
                                    <SponsorsItem sponsor={item} />
                                </div>)
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
}