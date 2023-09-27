const encrypt = (str) => {
  const reverse = str.split('').reverse().join('')
  return 'encrypted_' + reverse
}

const decrypt = (str) => {
  const strip = str.substring(10)
  // const strip = str.substr(9)
  return strip.split('').reverse().join('')
}

exports.encrypt = encrypt
exports.decrypt = decrypt