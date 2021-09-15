import { atom } from 'recoil'

export const userState = atom({
  key: 'userData',
  default: {}
})

export const userAuthState = atom({
  key: 'userAuth',
  default: false
})
