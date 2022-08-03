
const borrandoString = (obj) => {
    let newObj = obj
    if(newObj.material_id == ""){delete  newObj.material_id }
    if(newObj.category_id == ""){delete  newObj.category_id }
    if(newObj.subCategory_id == ""){delete  newObj.subCategory_id }
    if(newObj.name == ""){delete  newObj.name }
    if(newObj.max == ""){delete  newObj.max }
    if(newObj.min == ""){delete  newObj.min }
    if(newObj.stock == ""){delete  newObj.stock }
    if(newObj.state == ""){delete  newObj.state }
    if(newObj.price == ""){delete  newObj.price }
    if(newObj.hardness == ""){delete  newObj.hardness }
    if(newObj.purity == ""){delete  newObj.purity }
    // if(typeof newObj.subCategory_id === 'string'){newObj.subCategory_id = parseInt(newObj.subCategory_id)}

    return newObj

}

module.exports = {
    borrandoString
}