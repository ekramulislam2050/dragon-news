import { Link } from "react-router-dom";



const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">

            <div className="w-full max-w-lg p-10 rounded-none card bg-base-100 shrink-0">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
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
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="mt-6 form-control">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>  Have An Account ? <Link to={"/auth/login"} className="text-green-500">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;