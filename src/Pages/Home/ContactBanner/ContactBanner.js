import React from 'react';

import { ImHome, ImPhone,ImLocation } from "react-icons/im";
const ContactBanner = () => {
    return (
        
    <div className="p-12 py-16 my-24 bg-black text-white rounded-xl">
		<div className="container mx-auto">
		<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<div className="flex gap-3">
				<div className='text-4xl py-2 mx-3'><ImHome></ImHome></div>
				<div>
				<h1>We are open at Monday to Friday</h1>
				<h1 className='text-xl font-bold'>8.00 am - 10.00 pm </h1>
				</div>

			</div>
			<div className="flex gap-3">
				<div className='text-4xl py-2 mx-3'><ImPhone></ImPhone></div>
				<div>
				<h1>Have a Question?</h1>
				<h1 className='text-xl font-bold'>+8801840930768</h1>
				</div>
			</div>
			<div className="flex gap-3 ">
				<div className='text-4xl py-2 mx-3'><ImLocation></ImLocation></div>
				<div>
				<h1>Need Repair? Our Address</h1>
				<h1 className='text-xl font-bold'>Mirsarai Street, Chittagong</h1>
				</div>

			</div>
		</div>
		</div>
	</div>
        
    );
};

export default ContactBanner;