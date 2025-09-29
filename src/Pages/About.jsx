import BGText from "../Components/BGText";
import ButtonCenter from "../Components/ButtonCenter";
import HeroMini from "../Components/HeroMini";
import IconTitleContent from "../Components/IconTitleContent";
import PreEvents from "../Components/PreEvents";
import Vision from "../Components/Vision";

export default function About() {
    return <div className="about">
        <HeroMini title="ABOUT US" bg_img="/owasp-build-2025/img1.jpg" />
        <IconTitleContent title={null} icon={true} content={<>The Open Worldwide Application Security Project (OWASP) is an open-source, not-for-profit application security organization made up of corporations, educational organizations, and individuals from around the world. Providing free, vendor-neutral, practical, cost-effective application security guidance, the OWASP Foundation is the de-facto standards body for web application security used by developers and organizations globally. <br /><a href="https://owasp.org/">Learn more</a> about OWASP and membership benefits.</>} />
        <BGText type={2} title={"BECOME A MEMBER TODAY"} head={<>"Find any of the organisers or staff members. Volunteers will also<br />be on hand to help you in any situation."</>} button_t={<ButtonCenter text={"BECOME A MEMBER"} mb={60} mt={0} />} />
        <IconTitleContent title={"Our Conferences"} icon={null} content={"Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, race, religion, etc… We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter, and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers."} />
        <Vision />
        <PreEvents />
    </div>
}