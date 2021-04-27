import React from "react";

function ProgressList({width}) {
	return (
		<>
			{/* <h1 className=''>JavaScript</h1> */}
			<div className='h-3 relative max-w-xl rounded-full overflow-hidden '>
				<div className='w-full h-full bg-gray-200 absolute'></div>
				<div
					className='h-full bg-green-500 absolute hover:bg-green-300'
					style={{ width: `${width}%` }}
				></div>
			</div>
		</>
	);
}
const H1 = ({skills}) =>{
  return (
		<>
    <h1 className='text-white font-serif text-lg font-normal 
    text-center hover:text-black'>{skills}</h1>
    </>
  )
}

export {ProgressList ,H1};
