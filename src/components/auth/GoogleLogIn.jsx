
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebaseConfig';

export default function GoogleLogIn() {

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleLogin = () =>{
    signInWithGoogle();
  };

  return (
    <div>
        <button onClick={handleGoogleLogin} className='btn font-semibold'><img src="https://i.ibb.co/K5p99pX/img41.png" alt="" className='w-[50px]' />Google</button>
    </div>
  )
}
