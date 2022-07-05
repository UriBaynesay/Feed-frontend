import { useState } from "react"

export const FeedForm = ({ onSendMsg }) => {
  const [msg, setMsg] = useState({ email: "", txt: "" })

  const onChangeMsg = ({ target }) => {
    setMsg({ ...msg, [target.name]: target.value })
  }

  return (
    <form onSubmit={(ev) => {ev.preventDefault();onSendMsg(msg)}}>
      <input
        type="email"
        name="email"
        value={msg.email}
        onChange={(ev) => onChangeMsg(ev)}
      />
      <textarea value={msg.txt} name="txt" onChange={(ev) => onChangeMsg(ev)} />
      <button className="send-msg-btn">Send</button>
    </form>
  )
}
