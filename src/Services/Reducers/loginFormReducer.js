const initial = {
    isLogin : false,
    user : null,
    isError : null,
}

const loginFormReducer = (state = initial, action) => {

    switch (action.type) {

        case "loginUser": 

            return {
                ...state,
                isLogin : true,
                user : action.payload,
            }

        case "error":

            return {
                ...state,
                isLogin : false,
                isError : action.payload,
            }

        case "logoutSuc" :

            return {
                ...state,
                isLogin : false,
                user : null,
            }

        case "logoutRej" :

            return {
                ...state,
                isError : action.payload,
            }

        default:
            return state
    }
}

export default loginFormReducer