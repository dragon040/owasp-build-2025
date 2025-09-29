import BGText from "../Components/BGText";
import HeroMini from "../Components/HeroMini";
import OBDC from "../Components/OBDC";
import PreEvents from "../Components/PreEvents";
import Speakers from "../Components/Speakers";
import Sponsors from "../Components/Sponsors";

export default function Program() {
    return <div className="program">
        <HeroMini title={"PROGRAM"} bg_img="/owasp-build-2025/img6.jpg"/>
        <OBDC title={"OWASP BeNeLux Days Conference 2025"} subtitle={"This year, the OWASP BeNeLux days will take place on Tuesday the 2nd and Wednesday the 3rd of December 2025 in Belgium."} button={"Join Now!"} />
        <PreEvents />
        <Speakers />
        <BGText type={2} title={"We organize a social event social vent. More information will follow"} head={"You are welcome to join us for a drink and snacks as of 19:00."} button={"Please register when you plan to come?"} />
        <br />
        <br />
        <Sponsors only_icons={true} />
    </div>
}