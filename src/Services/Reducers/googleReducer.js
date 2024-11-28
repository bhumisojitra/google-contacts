const initialState = {
    users : JSON.parse(localStorage.getItem('users')) || [],
    user : null,
    isError : false,
    errorMsg: 'soming error occured',
};

const googleReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'AddUser':

            const allData = action.payload;

            localStorage.setItem('users', JSON.stringify(allData));

            console.log("allData :", allData);

            return{
                ...state,
                users : allData,
                user : null,
                isError : false,
            }

        case 'error':
            return{
                ...state,
                isError : true,
                errorMsg : "network error",
            }

        case "singleData":
            return{
                ...state,
                user : action.payload,
            }

        default:
            return state;
    }
};

export default googleReducer;