import SponsorsItem from "./SponsorsItem"
import { SponsorsModel } from "./SponsorsModel"

const sponsors = [
  new SponsorsModel("https://www.computerswithcauses.org/wp-content/uploads/elementor/thumbs/donateasus-pb4k2lq4z88u992pnkqemdp66h621jn8vu40b8qo42.png", ""),
  new SponsorsModel("https://www.computerswithcauses.org/wp-content/uploads/elementor/thumbs/donatebarracuda-pb4k7m75ff3w6dskdqqrx45o8ggj3fjpknd8gdb2xe.png", ""),
  new SponsorsModel("https://www.computerswithcauses.org/wp-content/uploads/elementor/thumbs/donatecisco-pb4k8z2rasysy3tkgbvdirtn4hrm7oxr3daheralxu.png", ""),
  new SponsorsModel("https://www.computerswithcauses.org/wp-content/uploads/elementor/thumbs/donatedell-pb4k9v19r66jwuj59poovjrbble3hegmjrgzq5z82a.png", ""),
  new SponsorsModel("https://www.computerswithcauses.org/wp-content/uploads/elementor/thumbs/donatehp-pb4kawmtcjm0t90j65xrna9r308s1alw0xkex8fh5e.png", ""),
  new SponsorsModel("https://www.computerswithcauses.org/wp-content/uploads/elementor/thumbs/donate-Ipad-pb4kiw9ffujrhxeqim9lu9osuwv3gobr4h6zrwl09e.png", ""),
  new SponsorsModel("https://www.computerswithcauses.org/wp-content/uploads/elementor/thumbs/donatelenovo-pb4kvffykbpear7dc1aj33u1zv3a3e2wuic24q01aq.png", ""),
  new SponsorsModel("https://www.computerswithcauses.org/wp-content/uploads/elementor/thumbs/donatemicrosoft-pb4kwmojapcl4tgkbjzd9sx9bl65xgukcgce7g7xci.png", ""),
  new SponsorsModel("https://www.computerswithcauses.org/wp-content/uploads/elementor/thumbs/donatepantough-pb4kxoa2w2s217xy808g1jfp300uhczttmfteio6fm.png", ""),
  new SponsorsModel("https://www.computerswithcauses.org/wp-content/uploads/elementor/thumbs/donatesamsung-pb4kyza0dske5q1olkjsi7kqs9l7686eo323ecqhsi.png", "")
];


export default function Sponsors() {
    return (
        <div className="sponsors-root">
            <p className="sponsors-title"> Sponsors</p>

            <div className="sponsors-list  scrollbar-hide">
                <div className="sponsors-items">
                    {
                        sponsors.map((item, index) => {
                            return (<div key={index}  className="sponsors-item-container">
                                <SponsorsItem sponsor={item} />
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}