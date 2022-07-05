import { storageService } from "./async-storage.service.js"

const STORAGE_KEY = "MSGS"

_setLocalStorageDummiData()

export const msgService = {
  query,
  addMsg,
}

async function query(filterBy) {
  let msgs = await storageService.query(STORAGE_KEY)
  if (filterBy.txt) {
    const regEx = new RegExp(filterBy.txt, "i")
    msgs = msgs.filter((msg) => {
      if (regEx.test(msg.email) || regEx.test(msg.txt)) return true
      return false
    })
  }
  return msgs
}

async function addMsg(msg) {
  return await storageService.post(STORAGE_KEY, msg)
}

async function _setLocalStorageDummiData() {
  const msgs = await query({ txt: "" })
  if (msgs.length === 0) {
    storageService.post(STORAGE_KEY, {
      imgUrl: "",
      email: "uri552@gmail.com",
      txt: "hello there",
    })
  }
}
