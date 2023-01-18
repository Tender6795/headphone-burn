export const isAnySelectedCheck = obj => {
  return Object.values(obj).some(item => item.isChecked)
}

export const onlyCheckedData = obj => {
  let newObj = {}
  Object.keys(obj).forEach(item => {
    if (obj[item].isChecked) {
      newObj = {
        ...newObj,
        [item]: obj[item],
      }
    }
  })
  return newObj
}
