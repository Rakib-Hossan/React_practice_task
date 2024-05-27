import { Link, useNavigate } from "react-router-dom";
import GoogleLogIn from "../components/auth/GoogleLogIn";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/firebaseConfig";
import { useEffect } from "react";

export default function Login() {
 
    const navigate = useNavigate();
    const [userInfo] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const handleSignIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(email,password);
      }

    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
        
    },[navigate,userInfo,loading]);
  
    return (
    <div>
        <h1 className=" text-3xl md:text-4xl font-bold text-center py-4 text-violet-600">Login now!</h1>
        <div className="hero ">
            <div className="hero-content flex-col gap-8 md:gap-24 lg:flex-row-reverse justify-between">
                <div className="text-center lg:text-left flex-1">
                    <img src="https://i.ibb.co/VV6Kgv3/img2.jpg" />
                </div>
                <div className="card shrink-0 shadow-2xl bg-base-100 flex-1">
                    <form onSubmit={handleSignIn}className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email"placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                            {error && <p className="text-rose-800 font-semibold">Password is incorrect</p>}

                        <div>
                            <h3 className="my-4 text-center text-violet-400 text-xl font-semibold">Login with</h3>
                            <GoogleLogIn />
                        </div>
                        <div>
                        <label className="label">
                                <Link to={'/register'} className="label-text-alt link link-hover text-lg text-violet-700 font-bold">Do you have an account ? Register</Link>
                        </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
