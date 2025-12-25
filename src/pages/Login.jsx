import React, { useContext } from 'react'
import { mainContext } from '../context/MainContext';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { t } from 'i18next';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

function Login() {
    const { dispatch } = useContext(mainContext);
    const { t } = useTranslation();
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        signInWithEmailAndPassword(
          auth, 
          formData.get("email"), 
          formData.get("password")
        )
          .then((userCredential) => { 
            const user = userCredential.user;
            toast.success(t("welcome"))
            return user
          }).then((user)=> {
            dispatch({type: "LOGIN", payload: user })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error("Bunday yuzer mavjud emas")
          });
        
        e.target.reset();

    }

    const handleGoogleLogin = ()=> {
        const provider = new GoogleAuthProvider()
          signInWithPopup(auth, provider)
            .then((result) => {
              const user = result.user;
              dispatch({type: "LOGIN", payload: user})
            })
            .catch((error) => {
              const errorMessage = error.message;
            });
    }


    return (
        <div className="w-full h-full grow flex justify-center items-center">
            <div className="w-full max-w-[400px] flex flex-col gap-6 shadow-2xl py-8 px-8">
                <h2 className="text-3xl text-center font-bold">LOGIN</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <input 
                            className="input w-full"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <input 
                            className="input w-full"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <Link className="link" to="/signup">
                      {t("ro'yhatdan o'tish")}
                    </Link>
                    {/* <button 
                        onClick={handleGoogleLogin} 
                        className="btn btn-neutral" 
                        type="submit"
                      >
                      </button> */}
                      <button 
                        onClick={handleGoogleLogin} 
                        className="btn btn-neutral" 
                        type="button"
                    >
                      <FcGoogle />
                      <span>Google</span>
                    </button>
                    <button className="btn btn-primary" type="submit">
                        {t("kirish")}
                    </button>
                </form>
            </div>
        </div>
      )
}

export default Login