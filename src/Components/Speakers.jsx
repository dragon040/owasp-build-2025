var speakers = [
    {
        icon: "/owasp-build-2025/spk1.jpg",
        name: "Irfan Santoe",
        content: `Introduction and OWASP update`,
    },{
        icon: "/owasp-build-2025/spk2.jpg",
        name: "Jim Manico",
        content: `Jim Manico, a long-time security enthusiast, joined Secure Code Warrior as part of an internship in 2015. Over the next two years, he wrote more than 100 rules for Sensei, their flagship IDE security plugin.`
    },{
        icon: "/owasp-build-2025/spk3.jpg",
        name: "Edzo Botjes",
        content: `Edzo Botjes is Antifragility Architect at Xebia and in IT since 1991. He published his Master Thesis titled "Defining Antifragility and the Application on Organisation Design" in 2020 as open access under CC BY-SA 4.0.`
    },{
        icon: "/owasp-build-2025/spk4.jpg",
        name: "Giuseppe Trovato",
        content: `Giuseppe has always been fascinated by many aspects of Information Security and chose to focus on software security when he joined Veracode in 2014. He has spent his time building stuff, helping developers with the identification.`
    },{
        icon: "/owasp-build-2025/spk5.jpg",
        name: "Glenn ten Cate",
        content: `As a coder, hacker, speaker, trainer and security chapter leader employed at ING Belgium Glenn has over 15 years experience in the field of security. One of the founders of defensive development security trainings`
    },{
        icon: "/owasp-build-2025/spk6.jpg",
        name: "Christian Folini",
        content: `Dr. Christian Folini is a Swiss security engineer and open source enthusiast. He brings 15 years of experience with ModSecurity configuration in high security environments, DDoS defense and threat modeling.`
    },{
        icon: "/owasp-build-2025/spk7.png",
        name: "Rob van der Veer",
        content: `Rob van der Veer has a 30 year background in building secure software and running software businesses. Cyber security and privacy have been constant themes in his career, from hacking into the British RAF in 1986`
    },{
        icon: "/owasp-build-2025/spk8.png",
        name: "Theo Rigas",
        content: `Théo Rigas is a cyber security expert at NVISO, where he helps customers secure their products’ ecosystems on a daily basis. He has performed numerous IoT and embedded security assessments in many sectors, on devices including industrial routers`
    },{
        icon: "/owasp-build-2025/spk9.png",
        name: "Philippe De Ryck",
        content: `Philippe De Ryck helps developers protect companies through better web security. His Ph.D. in web security from KU Leuven lies at the basis of his exceptional knowledge of the security landscape. As the founder of Pragmatic Web Security, Philippe`
    }
]

export default function Speakers() {
    return <div className="speakers">
        <div className="title">PREVIOUS YEAR SPEAKERS</div>
        <div className="speaker-ar">
            {
                speakers.map((e, i)=>{
                    return <div className="speaker">
                        <div className="icon" style={{backgroundImage: `url(${e.icon})`}}></div>
                        <div className="name">{e.name}</div>
                        <div className="content">{e.content}</div>
                    </div>
                })
            }
        </div>
    </div>
}