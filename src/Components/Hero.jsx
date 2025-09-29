import { Link } from "react-router-dom";

export default function Hero() {
    return <div className="hero">
        <div className="overlay"></div>
        <div className="left">
            <div className="heading">OWASP BENELUX DAYS <br/>CONFERENCE 2025</div>
            <div className="sub-heading">by OWASP Foundation</div>
            <Link to={"/donation"}><button className="btn bg-lg">REGISTER</button></Link>
        </div>
    </div>
}