import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { AddProduct } from '../../Components/AddProduct/AddProduct.jsx';
import { ListProduct } from '../../Components/ListProduct/ListProduct';

export const Admin = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      {/* Sidebar: Full width on small screens, fixed width on medium and larger screens */}
      <div className='w-full md:w-[250px]'>
        <Sidebar />
      </div>
      
      {/* Content: Takes full width on small screens and flex-1 on larger screens */}
      <div className='flex-1 p-4'>
        <Routes>
          <Route index element={<AddProduct />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/listproduct' element={<ListProduct />} />
        </Routes>
      </div>
    </div>
  );
};
