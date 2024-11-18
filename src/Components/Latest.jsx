import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";



const Latest = () => {
    return (
        <div className="w-11/12 mx-auto bg-base-200">
            <div className="flex items-center gap-3">
                <p className="bg-[#D72050] btn text-white">Latest</p>
                <Marquee className="space-x-10" pauseOnHover={true}>
                    <Link to={"/news"}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga sunt quos deserunt impedit saepe? Quam iusto modi incidunt velit!
                    </Link>
                    <Link to={"/news"}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga sunt quos deserunt impedit saepe? Quam iusto modi incidunt velit!
                    </Link>
                    <Link to={"/news"}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga sunt quos deserunt impedit saepe? Quam iusto modi incidunt velit!
                    </Link>
                </Marquee>
            </div>

        </div>
    );
};

export default Latest;