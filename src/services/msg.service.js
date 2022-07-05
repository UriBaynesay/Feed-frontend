import { storageService } from "./async-storage.service.js"

const STORAGE_KEY = "MSGS"

_setLocalStorageDummiData()

export const msgService = {
  query,
  addMsg,
}

async function query() {
  return await storageService.query(STORAGE_KEY)
}

async function addMsg(msg) {
  return await storageService.post(STORAGE_KEY, msg)
}

async function _setLocalStorageDummiData() {
  const msgs = await query()
  if (msgs.length === 0) {
    storageService.post(STORAGE_KEY, {
      imgUrl: "",
      email: "uri552@gmail.com",
      txt: "hello there",
    })
  }
}
