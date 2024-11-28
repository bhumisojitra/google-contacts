import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { loginRec } from "../../Services/Actions/loginFormAction";

const ViewHOC = (WrappedComponent) => {
    return ({props}) => {

        const dispatch = useDispatch();
        const { isLogin, user } = useSelector((state) => state.loginFormReducer);

        useEffect(() => {

            const userDataForLogin = localStorage.getItem("userr");

            if (userDataForLogin) {
                dispatch(loginRec(userDataForLogin));
            }
            
        }, [dispatch]);

        if (isLogin && user) { 

            return <WrappedComponent />;
        } else {

            return <LoginForm {...props}/>;
        }
    };
};

export default ViewHOC;
