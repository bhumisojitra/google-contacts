const initialState = {
    isLoading : false
}

const lodingReducer = (state = initialState, action) => {

    switch (action.type) {

        case "loading": {

            return {
                ...state,
                isLoading : true
            }
        }

        case "lodingComplet":{

            return {
                ...state,
                isLoading : false
            }
        }
        
        default :
            return state
    }
}

export default lodingReducer