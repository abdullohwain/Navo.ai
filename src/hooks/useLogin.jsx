// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from '../firebase/firebase.config';
// import { useContext } from "react";
// import { mainContext } from "../context/MainContext";

// function useLogin() {
//   const { dispatch } = useContext(mainContext);
//   const googleLogin = ()=> {
//     const provider = new GoogleAuthProvider();
//       signInWithPopup(auth, provider)
//         .then((result) => {
//           const user = result.user;
//           dispatch({ type: "LOGIN", payload: user });
          
//         })
//         .catch((error) => {
//           const errorMessage = error.message;
//         });
//     }
//     return googleLogin
// }

// export default useLogin;
