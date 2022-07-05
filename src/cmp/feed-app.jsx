import { useEffect, useState } from "react"

import { FeedForm } from "./feed-form"
import { FeedFilter } from "./feed-filter"
import { MsgList } from "./msg-list"
import { msgService } from "../services/msg.service"

export const FeedApp = () => {
  const [msgs, setMsgs] = useState([])

  useEffect(() => {
    loadMsgs()
  })

  const loadMsgs = async () => {
    setMsgs(await msgService.query())
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
