

export default function Register() {
  return (
    <div>
        <h1 className=" text-3xl md:text-5xl font-bold text-center py-4">Register now!</h1>
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col gap-8 md:gap-24 lg:flex-row-reverse justify-between">
                <div className="text-center lg:text-left flex-1">
                    <img src="https://i.ibb.co/x1b6c4x/img3.jpg" />
                </div>
                <div className="card shrink-0 shadow-2xl bg-base-100 flex-1">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
