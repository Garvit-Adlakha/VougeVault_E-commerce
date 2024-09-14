import navlogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';
export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 md:p-8 lg:pl-14 lg:pr-14 shadow-md bg-white sticky top-0 z-50'>
      <img 
        className='w-[120px] md:w-[160px] lg:w-[200px]' 
        src={navlogo} 
        alt="Navigation Logo" 
      />
      <img 
        className='w-[50px] md:w-[60px] lg:w-[75px]' 
        src={navProfile} 
        alt="User Profile Icon" 
      />
    </div>
  );
};
