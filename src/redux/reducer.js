const initializeState = {
    noticies: null,
    token: null,
    url: null,
    host: null,
    space: null,
    singleNoticies: null,
}

/* 
    action{
        payload: data,
        type: case switch
    }

 */


function reducer(state = initializeState, action){
    switch(action.type){
        case "NOTICIES":
            return{
                ...state,
                noticies: action.payload
            }

        default:
            return { ...state }
    }
}

export default reducer;