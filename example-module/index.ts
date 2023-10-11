export const encrypt = (str: string) => {
  const reverse = str.split('').reverse().join('')
  return 'encrypted_' + reverse
}

export const decrypt = (str: string) => {
  const strip = str.substring(10)  // Let us remove the 'encrypted_' part
  return strip.split('').reverse().join('')
}