import { SponsorsModel } from "./SponsorsModel"

type SponsorsItemProp = {
    sponsor: SponsorsModel
}

export default function SponsorsItem({sponsor}: SponsorsItemProp) {
    return (
            <div className="flex h-30 shrink-0 px-10">
                <img 
                    className="h-full w-30 max-w-30 object-contain" 
                    src={sponsor.logoUrl} 
                    alt="Sponsors Logo" 
                />
            </div>
    )
}