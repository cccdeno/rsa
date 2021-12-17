import * as rsa from "https://deno.land/x/rsa/mod.ts"

let key = rsa.genKeyPair()

console.log('key=', key)

let m = 123456789n
let c = rsa.encrypt(key, m)
let m2 = rsa.decrypt(key, c)
console.log('m=', m)
console.log('c=', c)
console.log('m2=', m2)
