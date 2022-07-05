export const MsgPreview = ({msg})=>{
    return <article className="msg-preview-container">
        <div className="img-container">

        </div>
        <h3>{msg.email}</h3>
        <p>{msg.txt}</p>
    </article>
}