import OpenAccounts from "../OpenAccounts";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";

function HomePage() {
    return (
        <>
    
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccounts/>
            


        </>
    );
}

export default HomePage;