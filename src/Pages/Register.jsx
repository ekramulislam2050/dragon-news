import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../HomeLayout/AuthProvider";



const Register = () => {
    const {createUser,setUser}=useContext(authContext)
    const formHandler=(e)=>{
        e.preventDefault()
        // console.log(e.target.name.name)
        const from = new FormData(e.target)
        // console.log(from)
        const name = from.get("name")
        const photoUrl = from.get('photo url')
        const email = from.get("email")
        const password = from.get("password")
        // console.log(name,photoUrl,email,password)
        createUser(email,password)
        .then((result)=>{
            const user=result.user
            setUser(user)
            // console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
             console.log(errorCode,errorMessage)
          });
    }
    return (
        <div className="flex items-center justify-center min-h-screen">

            <div className="w-full max-w-lg p-10 rounded-none card bg-base-100 shrink-0">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <form className="card-body" onSubmit={formHandler}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" name="photo url" placeholder="photo url" className="input input-bordered" required />
                    </div>
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