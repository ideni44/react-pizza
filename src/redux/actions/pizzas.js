const setPizzas = (items) => {
    return {
        type:'SET_PIZZAS',
        payload:items,
    }                    
}

const setCategory = (index) => {
    return {
        type:'SET_CATEGORY',
        payload:index,
    }                    
}