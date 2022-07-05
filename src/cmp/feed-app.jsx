import { FeedForm } from "./feed-form"
import { FeedFilter } from "./feed-filter"
import { MsgList } from "./msg-list"
import { useEffect, useState } from "react"

export const FeedApp = () => {
  const [msgs, setMsgs] = useState([])

  useEffect(()=>{
    loadMsgs()
  })

  const loadMsgs=async()=>{
    setMsgs()
  }

  const onSendMsg = (msg) => {}
  const onSetFilter = (filterBy) => {}

  return (
    <section className="feed-app-container">
      <FeedForm onSendMsg={onSendMsg} />
      <FeedFilter onSetFilter={onSetFilter} />
      <MsgList msgs={msgs} />
    </section>
  )
}
