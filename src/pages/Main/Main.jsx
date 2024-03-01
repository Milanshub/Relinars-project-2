import HeroImage from "../../components/Hero/HeroImage";
import About from "../../components/About/About.jsx";
import CompanyInfo from "../../components/Companies/Companies.jsx";
import Sustainability from "../../components/Sustainability/Sustainability.jsx";
import Contacts from "../../components/Contact/Contacts.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "../../components/App.css"


const Main = () =>{

    return (
    <>
        <HeroImage 
            classname='component'
            Title="MAKING BUSINESS TRADING EASIER."
            subTitle="RELINARS GROUP."
        />
        <About 
            classname='component'
        />
        <CompanyInfo 
            classname='component'
        />
        <Sustainability 
            classname='component'
        />
        <Contacts 
            classname='component'
        />
        <Footer 
            classname='component'
        />
    
    </>
    )
}


export default Main; 
