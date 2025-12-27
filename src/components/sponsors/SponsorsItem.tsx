import { SponsorsModel } from "./SponsorsModel"

type SponsorsItemProp = {
    sponsor: SponsorsModel
}

export default function SponsorsItem({sponsor}: SponsorsItemProp) {
    return (
            <div className="sponsorsitem-root">
                <img 
                    className="sponsorsitem-logo" 
                    src={sponsor.logoUrl} 
                    alt="Sponsors Logo" 
                />
            </div>
    )
}