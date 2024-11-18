import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUsOn = () => {
    return (
        <div>
            <h2 className="my-4 font-semibold">Find Us On</h2>
            <div>
                <div className="flex join join-vertical">
                    <button className="items-center justify-start btn join-item bg-base-100"><FaFacebookF></FaFacebookF>Button</button>
                    <button className="items-center justify-start btn join-item bg-base-100"> <FaInstagram></FaInstagram>Button</button>
                    <button className="items-center justify-start btn join-item bg-base-100"><FaTwitter></FaTwitter>Button</button>
                </div>
            </div>
        </div>
    );
};

export default FindUsOn;