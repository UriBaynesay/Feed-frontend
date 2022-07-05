import { MsgPreview } from "./msg-preview"

export const MsgList = ({ msgs }) => {
  console.log(msgs);
  return (
    <section className="msgs-list-container">
      <ul>
        {msgs.map((msg, idx) => {
          return (
            <li key={msg._id}>
              <MsgPreview msg={msg} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
