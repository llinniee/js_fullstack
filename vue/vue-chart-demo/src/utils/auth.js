import Cookie from 'js-cookie'

const TokenKey = 'DS-Token'
export function getToke() {
  return Cookie.get(TokenKey)
}