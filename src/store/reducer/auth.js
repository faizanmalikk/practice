const initial = {
name : "faizan",
age : 66
}
export default( state = initial,action) =>{
    console.log("auth  = " ,  action)
    switch (action.type) {
        case "set_data":
            return({
                ...state,
                name : action.data
            })
    }
return state;
}