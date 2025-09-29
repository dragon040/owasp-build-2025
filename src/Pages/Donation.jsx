import HeadSubButton from "../Components/HeadSubButton";
import HeroMini from "../Components/HeroMini";

export default function Donation() {
    return <div className="donation">
        <HeroMini title={"DONATION"} bg_img="/owasp-build-2025/img4.jpg" />
        <HeadSubButton head={"Donate to the OWASP Foundation"} sub_head={"The Open Worldwide Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software. Through community-led open source software projects and hundreds of local chapters worldwide, your gift* will support the Foundation and its many activities around the world to secure the web."} button={"Support OWASP by donating now!"} url={"https://owasp.org/donate/"} bam={true}/>
    </div>
}