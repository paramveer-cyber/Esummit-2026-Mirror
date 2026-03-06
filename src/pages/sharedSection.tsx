import Zonals from "./zonals";
import Events from "./events";
import Speakers from "./speakers";
import Sponsors from "./sponsors";

import bg from "../assets/zonals_background.webp";

export default function SharedSection() {
    return (
        <div className="relative overflow-x-hidden">
            <div
                className="fixed inset-0 -z-10"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <Zonals />
            <Events />
            <Speakers />
            <Sponsors />

        </div>
    );
}