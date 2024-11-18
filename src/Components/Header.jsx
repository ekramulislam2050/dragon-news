import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="logo">
                <img src={logo}  className='w-[300px] py-2'  />
            </div>
            <h2 className='py-2 text-gray-400'>Journalism Without Fear or Favour</h2>
             <p className='pb-2'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;