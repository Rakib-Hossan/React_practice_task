import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import GoogleLogIn from "../components/auth/GoogleLogIn";
import auth from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Register() {

    const navigate = useNavigate();
    const [userInfo] = useAuthState(auth);



    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth); 

    const[passMatch, setPassMatch] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value; 
        const confirmPassword = form.confirm_password.value;

    
        if(password !== confirmPassword){
            setPassMatch(false);
        }
        
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email,password,confirmPassword)
            console.log(email,password,confirmPassword);
        }
    }
    

// let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
    if(error){
        console.log(error?.message);
    }
  }, [userInfo, navigate,error]);

  return (
    <div>
        <h1 className=" text-3xl md:text-4xl font-bold text-center py-4 text-violet-600">Register now!</h1>
        <div className="hero ">
            <div className="hero-content flex-col gap-8 md:gap-24 lg:flex-row-reverse justify-between">
                <div className="text-center lg:text-left flex-1">
                    <img src="https://i.ibb.co/x1b6c4x/img3.jpg" />
                </div>
                <div className="card shrink-0 shadow-2xl bg-base-100 flex-1">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirm_password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {!passMatch && (
                                <div className="my-2">
                                    <p className="text-red-500">Passwords do not match!</p>
                                </div>
                                )}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div>
                            <h3 className="my-4 text-center text-violet-400 text-xl font-semibold">Register with</h3>
                            <GoogleLogIn />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
