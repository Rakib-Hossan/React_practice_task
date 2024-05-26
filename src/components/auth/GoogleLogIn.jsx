
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebaseConfig';

export default function GoogleLogIn() {

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleLogin = () =>{
    signInWithGoogle();
  };

  return (
    <div>
        <button onClick={handleGoogleLogin} className='btn'><img src="https://i.ibb.co/K5p99pX/img41.png" alt="" className='w-[50px]' /></button>
    </div>
  )
}
