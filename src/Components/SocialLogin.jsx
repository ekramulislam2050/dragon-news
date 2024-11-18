 
import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="py-2 font-semibold">Login With </h2>
            <div className="flex flex-col gap-2 ">
                <button className="items-center justify-center btn"><FaGoogle></FaGoogle>Login With Google</button>
                <button className="items-center justify-center btn"> <FaGithub></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;