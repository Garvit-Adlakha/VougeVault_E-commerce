import navProfile from '../../assets/nav-profile.svg';
export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 md:p-8 lg:pl-14 lg:pr-14 shadow-md bg-white sticky top-0 z-50'>
      <div className="flex justify-center items-center ">
      <img 
        className='w-12 h-auto' 
        src="https://teeshopper.in/store_page_asset/images/VogueVault-Clothing.png" 
        alt="Navigation Logo" 
      />
      <p className='text-gray-900 text-2xl font p-2'>VougeVault</p>
      </div>
      <img 
        className='w-[50px] md:w-[60px] lg:w-[75px]' 
        src={navProfile} 
        alt="User Profile Icon" 
      />
    </div>
  );
};
