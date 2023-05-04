export const fromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const toStorage = (key, value) => {
  const jsonValue = JSON.stringify(value)
  localStorage.setItem(key, jsonValue)
}
