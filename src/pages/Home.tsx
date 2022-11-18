
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SectionBuscaHome from "../components/SectionBuscaHome";
import CacarVets from "../components/SectionCacarVets";
import SectionCarrosselHome from "../components/SectionCarrosselHome";
import SectionFAQ from "../components/SectionFAQ";
import SectionVoceVet from "../components/SectionVoceVet";

function Home() {

    return(
        <>
            <NavBar/>
            <SectionBuscaHome/>
            <CacarVets/>
            <SectionVoceVet/>
            <SectionCarrosselHome/>
            <SectionFAQ/>
            <Footer/>
        </>
    )
}

export default Home;