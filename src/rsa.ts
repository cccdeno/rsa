import * as B from 'https://deno.land/x/bigint/mod.ts'

const keySize=100

// reference -- https://en.wikipedia.org/wiki/RSA_(cryptosystem)
export function genKeyPair() {
  let p = B.randomPrime(keySize)!, q=B.randomPrime(keySize)!
  let N = p*q, r=(p-1n)*(q-1n)
  let e = B.randomPrime(keySize)! // e<r
  let d = B.modInv(e, r)! // ed=1 mod r
  return {e,d,N}
}

export function encrypt(key:any, m:bigint) {
  let {e, N} = key
  return B.modPow(m, e, N)
}

export function decrypt(key:any, c:bigint) {
  let {d, N} = key
  return B.modPow(c, d, N)
}
