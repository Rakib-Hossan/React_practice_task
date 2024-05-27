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
    const[message, setMessage] = useState('');


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
            setMessage(
                <div role="alert" className="alert alert-success mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Successfully registered!</span>
                </div>
            );
            createUserWithEmailAndPassword(email,password,confirmPassword);
        }
    }
    

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

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
                                <div role="alert" className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Password do not match!!</span>
                            </div>
                                )}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            {message && <p>{message}</p>}
                        </div>

                        {error && <div role="alert" className="alert alert-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Email are already registered.</span>
                                </div>}

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
