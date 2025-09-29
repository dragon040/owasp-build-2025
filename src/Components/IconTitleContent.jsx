export default function IconTitleContent({title, icon, content}) {
    return <div className="icon-title-content">
        {
            title && <div className="title">{title}</div>
        }
        {
            icon && <div className="icon"></div>
        }
        {
            content && <div className="content">{content}</div>
        }
    </div>
}