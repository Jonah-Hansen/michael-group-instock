//returns the list of keys with empty values.
export const emptyValues = (formObject) => {
  const keys = Object.keys(formObject)
  return keys.filter(key => formObject[key].trim().length === 0)
}

