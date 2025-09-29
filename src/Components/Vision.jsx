import {AiOutlineArrowRight} from "react-icons/ai";

var bullets = [
    "Harassment includes, but is not limited to, offensive verbal comments related to gender, race, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.",
    "Participants asked to stop any harassing behavior are expected to comply immediately.",
    "Sponsors are also subject to the anti-harassment policy.",
    "Sponsors should not use sexualized images, activities, or other material.",
    "Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.",
    "If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.",
    "If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately.",
    "Conference staff can be identified as they’ll be wearing branded t-shirts.",
    "Conference staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference.",
    "We value your attendance.",
    "We expect participants to follow these rules at conference and workshop venues and conference-related social events."
]

var links = [
    {
        name: "Conferences Events",
        link: "https://owasp.org/www-policy/operational/conferences-events"
    }, {
        name: "Code Of Conduct",
        link: "https://owasp.org/www-policy/operational/code-of-conduct"
    }, {
        name: "Diversity statement",
        link: "https://2025.owaspbenelux.eu/about/diversity-statement"
    }];

export default function Vision() {
    return <div className="vision">
        <div className="title-icon">
            <div className="title">Change it to Policy & Guidelines</div>
            <div className="icon"></div>
        </div>
        <div className="content">
            {
                bullets.map((e, i)=>{
                    return <li key={i}>{e}</li>
                })
            }
        </div>
        <div className="links">
            {
                links.map((link, i)=>{
                    return <a className="link-btn" href={link.link} key={i}>{link.name} <AiOutlineArrowRight /></a>
                })
            }
        </div>
        <br />
        <a className="read-more" href="https://owasp.org/www-policy/">https://owasp.org/www-policy/</a>
    </div>
}