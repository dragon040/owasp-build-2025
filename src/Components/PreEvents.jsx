var events = [
    {
        text: "This year the OWASP BeNeLux Days will be organized in an online fashion. As such, we...",
        link: "https://2020.owaspbenelux.eu"
    }, {
        text: "There won't be any Covid Safe check during the event. So, the only ticket you need...",
        link: "https://2021.owaspbenelux.eu"
    }, {
        text: "Mark the date: we will host the 2023 edition on 23 and 24th of November in Belgium!",
        link: "https://2022.owaspbenelux.eu"
    }, {
        text: "Mark the date: we will host the 2024 edition on 28 and 29th of November in the Ne...",
        link: "https://2023.owaspbenelux.eu"
    }, {
        text: "Conference day on the 28th of November (On-site only) We are thrilled to announce...",
        link: "https://2024.owaspbenelux.eu"
    }
];

export default function PreEvents({title_show}) {
    return <div className="pre-events">
        {title_show && <div className="head">PREVIOUS BENELUX DAYS</div>}
        <div className="events">
            {
                [...events].map((e, i)=>{
                    return <div className="event" key={i}>
                        <div className="image" style={{backgroundImage: `url(/owasp-build-2025/img${i + 1}.jpg)`}}></div>
                        <div className="year">{2020 + i}</div>
                        <div className="text">{e.text}</div>
                        <button className="btn bg-lg" onClick={()=>window.open(e.link, `Event ${2020 + i}`, "width=1000,height=1000,left=100,top=100")}>Read More</button>
                    </div>
                })
            }
        </div>
    </div>
}