import { validate } from "email-validator";

//returns the list of keys with empty values.
export function values(formObject) {
  const keys = Object.keys(formObject)
  return keys.filter(key => formObject[key].trim().length === 0)
}

//returns phone number in format +1 (646) 123-1234
//or false if there are missing numbers
export function phone(string) {
  //check that number does not begin with +(num). if so, remove.
  if (string[0] === '+') string = string.slice(2)
  //remove non numbers from from string
  const s = string.split('').filter(char => char !== ' ' && !isNaN(char))
  //return false is not enough numbers
  if (s.length !== 10) return false
  return `+1 (${s[0] + s[1] + s[2]}) ${s[3] + s[4] + s[5]}-${s[6] + s[7] + s[8] + s[9]}`
}

//returns true or false if email is valid 
export function email(string) {
  return validate(string)
}