export default function BGText({type, title, head, button, button_t}) {
    if (type === 1) {
        return <div className="bg-text">
            {title && <div className="title">{title}</div>}
            {head && <div className="head">{head}</div>}
            {button && <button className="btn bg-lg">{button}</button>}
        </div>
    }
    if (type === 2) {
        return <div className="bg-text">
            {title && <div className="head">{title}</div>}
            {head && <div className="content">{head}</div>}
            {button && <button className="btn bg-lg" onClick={()=>window.open("mailto: <>")}>{button}</button>}
            {button_t}
        </div>
    }
}