import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function HeadSubButton({head, sub_head, button, url, bam, h_url}) {
    return <div className="head-sub-button">
        <div className="head">{head}</div>
        <div className="sub-heading">{sub_head}</div>
        <div className="head-sub-links">
            {
                h_url ? <Link to={h_url}><button className="btn bg-lg">{button}</button></Link> : <button className="btn bg-lg" onClick={()=>url && window.open(url)}>{button}</button>
            }
            {
                bam && <div className="btn bg-lg bam" onClick={()=>window.open("https://owasp.glueup.com/")}>BECOME A MEMBER <AiOutlineArrowRight /></div>
            }
        </div>
    </div>
}