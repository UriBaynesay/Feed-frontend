import { useEffect, useState } from "react"

import { FeedForm } from "./feed-form"
import { FeedFilter } from "./feed-filter"
import { MsgList } from "./msg-list"
import { msgService } from "../services/msg.service"

export const FeedApp = () => {
  const [msgs, setMsgs] = useState([])

  useEffect(() => {
    loadMsgs()
  }, [])

  const loadMsgs = async (filterBy = { txt: "" }) => {
    try {
      setMsgs(await msgService.query(filterBy))
    } catch (error) {
      console.error(error)
    }
  }

  const onSendMsg = async (msg) => {
    try {
      const newMsg = await msgService.addMsg(msg)
      setMsgs([...msgs, newMsg])
    } catch (error) {
      console.log(error)
    }
  }
  const onFilter = (filterBy) => {
    loadMsgs(filterBy)
  }

  return (
    <section className="feed-app-container">
      <FeedForm onSendMsg={onSendMsg} />
      <FeedFilter onFilter={onFilter} />
      <MsgList msgs={msgs} />
    </section>
  )
}
