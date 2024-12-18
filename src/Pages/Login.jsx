import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../HomeLayout/AuthProvider";

const Login = () => {
    const { login, setUser } = useContext(authContext)
    const [error, setError] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const submitHandler = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        // console.log({email,password})
        login(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                navigate(location?.state ? location.state : "/")
                // console.log(result)

            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            })
    }
    return (
        <div className="flex items-center justify-center min-h-screen">

            <div className="w-full max-w-lg p-10 rounded-none card bg-base-100 shrink-0">
                <h2 className="text-2xl font-semibold text-center">Login Your account</h2>
                <form className="card-body" onSubmit={submitHandler}>
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
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className="text-red-500 label">
                                    { error.login}
                                </label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="mt-6 form-control">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Dont’t Have An Account ? <Link to={"/auth/register"} className="text-red-500">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;