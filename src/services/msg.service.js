import { httpService } from "./http.service"

const END_POINT = "msg"


export const msgService = {
  query,
  addMsg,
}

async function query(filterBy) {
  try {
    const msgs = await httpService.get(END_POINT, filterBy)
    return msgs
  } catch (error) {
    throw error
  }
}

async function addMsg(msg) {
  try {
    const newMsg=await httpService.post(END_POINT,msg)
    return newMsg
  } catch (error) {
    throw error
  }
}

