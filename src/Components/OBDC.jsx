export default function OBDC({title, subtitle, button}) {
    return <div className="about-owasp">
        <div className="left">
            <div className="head">{title}</div>
            <summery>Save the date</summery>
            <div className="sub-heading">
                {subtitle}
            </div>
            <button className="btn bg-lg">{button}</button>
        </div>
        <div className="right" style={{backgroundImage: "url(/owasp-build-2025/img4.jpg)"}}></div>
    </div>
}