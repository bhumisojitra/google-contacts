import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

export const loginRec = (data) => {
    return {
        type : "loginUser", 
        payload : data
    }
}

const errorRec = (msg) => {
    return {
        type : "error",
        payload : msg
    }
}

const logoutSuc = () => {
    return {
        type : "logoutSuc"
    }
}

const logoutRej = (msg) => {
    return {
        type : "logoutRej",
        payload : msg
    }
}

export const loginAsncy = (user) => {
    return async (dispatch) => {
        
        console.log("useremaill.lll : ", user.email);

        signInWithEmailAndPassword(auth, user.email, user.password)

        .then(async(userCredential) => {

            const user = userCredential.user;
            console.log("user :", user);
 
            const docSnap = await getDoc(doc(db, "users", user.uid));
            
            if (docSnap.exists()) {
                
                console.log("Document data:", docSnap.data());
                dispatch(loginRec(docSnap.data()))

                //locatstoreg ma login uder ne store karva..
                localStorage.setItem("userr", user.uid)

                } else {

                    console.log("No such document!");
                    dispatch(errorRec("somthing want wrong"))
                }

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("errorCode :", errorCode);
            console.log("errorMessage :", errorMessage);

            dispatch(errorRec("somthing want wrong"))
            
        });
    }
}

export const logoutUser = () => {
    return async (dispatch) => {

        try{
            signOut(auth).then(() => {
                //locatstoreg mathi logout time par data remove karva mate
                localStorage.removeItem("userr");
                
                console.log("logoutSuc");
                dispatch(logoutSuc())
            }).catch((error) => {
            
                console.log(error);
                
            });
        }
        catch(err){
            dispatch(logoutRej("somthing wrong"))
        }

    }
}

export const loginGoogle = () => {

    return async (dispatch) => {

        signInWithPopup(auth, googleProvider)
            .then(async(result) => {
                console.log("ssxcfashchvscj");

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log("users datatataaa:", user);

                const { uid, displayName, email, photoURL } = user;
                
                const googlrUser = {
                    displayName: displayName || "Anonymous",
                    email: email,
                    uid: uid,
                    photoURL: photoURL,
                };

                localStorage.setItem("userr", user.uid)
                
                await setDoc(doc(db, "users", uid), googlrUser);
            
                dispatch(loginRec(googlrUser));

                
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

                console.log("helloiookinkl", errorMessage);
                
            });
    }
}