// install redux-thunk
const set_data = (data)=>{
return (dispatch)=>{
    dispatch({
        type : "disptach hai",
        data : data
    })
}
}
export {
    set_data
}

