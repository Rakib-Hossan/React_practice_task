import React from 'react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase/firebaseConfig';

export default function Navbar() {

    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    const handleLogout = async () => {
     const success  = await signOut();
     if(success){
        <div role="alert" className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Logged Out!</span>
        </div>
     }
    };

  return (
    <div>
        <div className="navbar text-black lg:px-32 py-6">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/product'}>Products</Link></li>
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost md:text-2xl font-bold text-violet-600"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512" id="cart"><path fill="	#7F00FF" d="M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6s41.601-18.718 41.601-41.6c-.001-22.884-18.72-41.601-41.601-41.601zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.082-5.2-5.2 0-1.036 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.601 0 29.128-8.317 36.4-21.836l74.882-128.8c1.237-2.461 2.082-6.246 2.082-10.399 0-11.446-9.364-19.765-20.8-19.765H135.364L115.6 51.2H48zm326.399 326.4c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6S416 442.082 416 419.2c0-22.883-18.719-41.6-41.601-41.6z"></path></svg>daisyMart</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/product'}>Products</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </div>
            {!user?.email ?(
                <div className="navbar-end">
                <Link to={'/login'} className="btn btn-success text-white">Log in</Link>
                </div>
            ):(
                <div className="navbar-end gap-4">
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/profile'}>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                </Link>
                <Link onClick={handleLogout} className="btn btn-error text-white">Log Out</Link>
                </div>
                
            )}
            
        </div>
    </div>
  )
}
