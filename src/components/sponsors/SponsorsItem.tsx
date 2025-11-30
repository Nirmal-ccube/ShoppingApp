import { SponsorsModel } from "./SponsorsModel"

type SponsorsItemProp = {
    sponsor: SponsorsModel
}

export default function SponsorsItem({sponsor}: SponsorsItemProp) {
    return (
            <div className="flex h-40 shrink-0 px-10">
                <img 
                    className="h-full w-48 max-w-48 object-contain" 
                    src={sponsor.logoUrl} 
                    alt="Sponsors Logo" 
                />
            </div>
    )
}