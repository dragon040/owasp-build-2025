import AboutOwasp from "../Components/AboutOwasp";
import BGText from "../Components/BGText";
import ConferenceInfo from "../Components/ConferenceInfo";
import Counter from "../Components/Counter";
import FAQ from "../Components/FAQ";
import HeadSubButton from "../Components/HeadSubButton";
import Hero from "../Components/Hero";
import PreEvents from "../Components/PreEvents";
import Sponsors from "../Components/Sponsors";
import TextScroller from "../Components/TextScroller";
import WhatHappen from "../Components/WhatHappen";

export default function Home() {
    return <div className="home">
        <Hero />
        <HeadSubButton h_url={"/program"} head={"SAVE THE DATE"} sub_head={"This year, the OWASP BeNeLux days will take place on Tuesday the 2nd and Wednesday the 3rd of December 2025 in Belgium."} button={"More information will follow"} />
        <Counter />
        <AboutOwasp />
        <TextScroller />
        <Sponsors />
        <ConferenceInfo />
        <PreEvents title_show={true} />
        <WhatHappen />
        <BGText type={1} title={"Pricing"} head={"The conference day is completely free, but registration is required!"} button={"For a participation of 50€ for one day!"} />
        <FAQ ao={true} />
    </div>
}