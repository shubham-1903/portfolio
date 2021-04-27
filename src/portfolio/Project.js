import React from "react";
import Pic1 from "../assets/portfolio-img/o1.jpg";
import Pic2 from "../assets/portfolio-img/o2.jpg";
import Pic3 from "../assets/portfolio-img/o3.jpg";
import Pic4 from "../assets/portfolio-img/o4.jpg";
import "./project.css";
function Project() {
	let counter=1;
	setInterval(function(){
		document.getElementById('radio'+counter).checked=true;
		counter++;
		if(counter>4){
			counter=1;
		}
	},3000);
	return (
		<>
			<div className=''>
				<div className='slider'>
					<div className='slides'>
						<input type='radio' name='radio-btn' id='radio1' />
						<input type='radio' name='radio-btn' id='radio2' />
						<input type='radio' name='radio-btn' id='radio3' />
						<input type='radio' name='radio-btn' id='radio4' />
						<div className='slide first'>
							<img src={`${Pic1}`} alt='pic1' srcset='' />
						</div>
						<div className='slide '>
							<img src={`${Pic2}`} alt='pic2' srcset='' />
						</div>
						<div className='slide '>
							<img src={`${Pic3}`} alt='pic3' srcset='' />
						</div>
						<div className='slide '>
							<img src={`${Pic4}`} alt='pic4' srcset='' />
						</div>
						<div className='navigation-auto'>
							<div className='auto-btn1'></div>
							<div className='auto-btn2'></div>
							<div className='auto-btn3'></div>
							<div className='auto-btn4'></div>
						</div>
					</div>
					<div class='navigation-manual'>
						<label for='radio1' class='manual-btn'></label>
						<label for='radio2' class='manual-btn'></label>
						<label for='radio3' class='manual-btn'></label>
						<label for='radio4' class='manual-btn'></label>
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;
