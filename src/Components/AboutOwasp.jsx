import { Link } from "react-router-dom";

export default function AboutOwasp() {
    return <div className="about-owasp">
        <div className="left">
            <div className="head">OWASP BeNeLux DAYS</div>
            <div className="sub-heading">
                This year, the OWASP BeNeLux days will take place on Tuesday the 2nd and Wednesday the 3rd of December 2025 in BeThe Open Worldwide Application Security Project (OWASP) is an open-source, not-for-profit application security organization made up of corporations, educational organizations, and individuals from around the world. Providing free, vendor-neutral, practical, cost-effective application security guidance, the OWASP Foundation.
            </div>
            <Link to={"/program"}><button className="btn bg-lg">Read More</button></Link>
        </div>
        <div className="right" style={{backgroundImage: "url(/owasp-build-2025/img6.jpg)"}}></div>
    </div>
}