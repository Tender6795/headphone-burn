export const isAnySelectedCheck = (obj) =>{
    return Object.values(obj).some((item)=>item.isChecked)
}