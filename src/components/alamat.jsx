import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Alamatuser = () => {
  return (
    <>
      <div className="bg-white shadow-md mt-1 mb-12 px-2 py-4 rounded-xl">
        <div className="flex flex-row justify-between">
          <div className="flex items-center ml-26 gap-4 text-sm text-gray-600 transition-dura">
            <p className="hover:bg-Primary p-2 rounded-2xl transition-duration-300 hover:text-white">
              Electronics
            </p>
            <p className="hover:bg-Primary p-2 rounded-2xl transition-duration-300 hover:text-white">
              NOVEL LAUT BIRU
            </p>
            <p className="hover:bg-Primary p-2 rounded-2xl transition-duration-300 hover:text-white">
              INDOMIE IGA PENYET
            </p>
            <p className="hover:bg-Primary p-2 rounded-2xl transition-duration-300 hover:text-white">
              CELANA BAGGY
            </p>
            <p className="hover:bg-Primary p-2 rounded-2xl transition-duration-300 hover:text-white">
              MINYAK SUNCO 2 LITER
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaLocationDot className="text-2xl text-Primary" />
            <p id="alamatUser">Dikirim ke JL. Bedahan</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export { Alamatuser };
