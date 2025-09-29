export default function ButtonCenter({text, mt, mb}) {
    return <div className="btn-ar" style={{marginBottom: mb, marginTop: mt}}>
        <button className="btn" onClick={()=>window.open(" https://owasp.glueup.com/organization/6727/memberships/")}>{text}</button>
    </div>
}