import { useState } from "react"

export const FeedForm = ({ onSendMsg }) => {
  const [msg, setMsg] = useState({ email: "", txt: "" })

  const onChangeMsg = ({ target }) => {
    setMsg({ ...msg, [target.name]: target.value })
  }

  return (
    <form className="feed-form" onSubmit={(ev) => {ev.preventDefault();onSendMsg(msg)}}>
      <input
        type="email"
        name="email"
        value={msg.email}
        onChange={(ev) => onChangeMsg(ev)}
        placeholder="Enter your email here"
      />
      <textarea value={msg.txt} name="txt" onChange={(ev) => onChangeMsg(ev)} placeholder="Whats on your mind"/>
      <button className="send-msg-btn">Send</button>
    </form>
  )
}
