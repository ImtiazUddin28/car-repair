import React from 'react';
import {ImManWoman, ImPointRight,ImSafari,ImEye,ImCheckmark,ImFileOpenoffice } from "react-icons/im";

const Choose = () => {
   
  return (
    
	<div className="p-12 py-12 my-18 ">
		<div className='text-center mb-4'>
                
                <h2 className="text-5xl font-bold text-orange-600">Why Choice Us?</h2>
                <p className='m-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
	<div className="container mx-auto">
	<div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
	<div className=" w-44 p-4 text-center">
			<div className='text-4xl py-3 mx-16 items-center text-orange-600'><ImManWoman></ImManWoman></div>
			<div>
			<div>
				<h1 className='text-xl font-bold'>Our Expert Team</h1>
			</div>
			</div>
		</div>
		<div className=" w-44 p-4 text-center">
			<div className='text-4xl py-3 mx-16 items-center text-orange-600'><ImSafari></ImSafari></div>
			<div>
			<div>
				<h1 className='text-xl font-bold'>Delivery On Time</h1>
			</div>
			</div>
		</div>
		<div className=" w-44 p-4 text-center">
			<div className='text-4xl py-3 mx-16 items-center text-orange-600'><ImEye></ImEye></div>
			<div>
			<div>
				<h1 className='text-xl font-bold'>24/7 Support Service</h1>
			</div>
			</div>
		</div>
		<div className=" w-44 p-4 text-center">
			<div className='text-4xl py-3 mx-16 items-center text-orange-600'><ImCheckmark></ImCheckmark></div>
			<div>
			<div>
				<h1 className='text-xl font-bold'>Best Equipments</h1>
			</div>
			</div>
		</div>
		<div className=" w-44 p-4 text-center">
			<div className='text-4xl py-3 mx-16 items-center text-orange-600'><ImFileOpenoffice></ImFileOpenoffice></div>
			<div>
			<div>
				<h1 className='text-xl font-bold'>100% Guaranty to back </h1>
			</div>
			</div>
		</div>
		<div className=" w-44 p-4 text-center">
			<div className='text-4xl py-3 mx-16 items-center text-orange-600'><ImPointRight></ImPointRight></div>
			<div>
			<div>
				<h1 className='text-xl font-bold'>Cash on Delivery</h1>
			</div>
			</div>
		</div>
	</div>
	</div>
</div>

  );
};

export default Choose;