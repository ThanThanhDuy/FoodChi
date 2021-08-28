import sha256 from 'sha256'

export const SHA256 = value => {
  return sha256(value)
}
