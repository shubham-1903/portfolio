import React, { useState } from "react";
import SocialIcon from "./SocialIcon";
import { db } from "../firebase";
import { motion } from "framer-motion";

const containerVarients = {
	hidden: {
		opacity: 0,
		x: "-100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", delay: 0.5 },
	},
};
function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [comment, setComment] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		db.collection("contacts")
			.add({
				name: name,
				email: email,
				subject: subject,
				comment: comment,
			})
			.then(() => {
				alert("your response has been submited");
			})
			.catch((e) => {
				alert(e.message);
			});
		setName("");
		setEmail("");
		setSubject("");
		setComment("");
	};
	return (
		<>
			<motion.div
				className='flex flex-col justify-center p-1 '
				variants={containerVarients}
				initial='hidden'
				animate='visible'
			>
				<h1 className='text-center uppercase font-serif text-4xl font-bold text-gray-300'>
					Contact Me
				</h1>
				<p className='text-center uppercase text-xs text-gray-300'>
					---xxx----
				</p>
				<p className='text-center uppercase font-mono tracking-tight text-gray-300'>
					It will be glad to answer your question
				</p>
			</motion.div>
			<motion.div
				className='container mx-auto flex justify-center'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1.5 }}
			>
				<form className='shadow-xl' onSubmit={handleSubmit}>
					<ul className='p-5 flex flex-col bg-yellow-300 list-none gap-2'>
						<li className=' bg-yellow-300'>
							<input
								className='w-96 h-10 outline-none p-2'
								type='text'
								placeholder='Name'
								name='name'
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</li>
						<li className=''>
							<input
								className='w-96 h-10 outline-none p-2'
								type='email'
								placeholder='Email'
								name='email'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								required
							/>
						</li>
						<li className=''>
							<input
								className='w-96 h-10 outline-none placeholder-red-400::placeholder p-2'
								type='text'
								placeholder='Subject'
								name='subject'
								value={subject}
								onChange={(e) => {
									setSubject(e.target.value);
								}}
							/>
						</li>
						<li className=''>
							<textarea
								className='w-96 h-28 outline-none p-2'
								rows='4'
								cols='50'
								name='comment'
								value={comment}
								placeholder='Your Message'
								onChange={(e) => {
									setComment(e.target.value);
								}}
							/>
						</li>
						<li className='bg-white'>
							<button
								type='submit'
								className='w-96 h-10  border-none outline-none  hover:bg-gray-200 transition duration-500 ease-in-out'
							>
								Send Message
							</button>
						</li>
					</ul>
				</form>
			</motion.div>
			<div className='p-2'>
				<h4 className='font-mono font-semibold text-center uppercase text-gray-50'>
					I am Social
				</h4>
			</div>
			<div className='flex justify-center py-1'>
				<SocialIcon h={10} w={10} />
			</div>
		</>
	);
}

export default Contact;
