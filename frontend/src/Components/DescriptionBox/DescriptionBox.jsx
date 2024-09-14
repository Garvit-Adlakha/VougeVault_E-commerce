import React from 'react';

export const DescriptionBox = () => {
  return (
    <div className="mt-28 mb-28 mx-10 lg:mx-44">
      <div className="flex border-b border-gray-300">
        <div className="flex items-center justify-center text-base font-semibold w-[171px] h-[70px] border-b-2 border-gray-400 cursor-pointer">
          Description
        </div>
        <div className="flex items-center justify-center text-base font-semibold w-[171px] h-[70px] border-b border-gray-300 cursor-pointer">
          Reviews (122)
        </div>
      </div>
      <div className="mt-8 text-gray-700">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam magnam aperiam iusto quod eveniet, laboriosam vitae odio cum. Hic deleniti eveniet laudantium beatae inventore iusto quidem quo assumenda aspernatur? Facilis voluptates nemo dolores laborum sint laboriosam similique quo! Quo corporis dolores voluptas?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste corporis laboriosam ex ipsam. Nesciunt, labore?
        </p>
      </div>
    </div>
  );
};
