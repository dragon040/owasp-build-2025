export default function HeroMini({title, bg_img}) {
    return <div className="hero-mini" style={bg_img && {backgroundImage: `url(${bg_img})`}}>
        <div className="left">
            <div className="black-layer"></div>
            <div className="heading">{title}</div>
        </div>
    </div>
}