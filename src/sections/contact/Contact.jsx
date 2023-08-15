import MainTitle from "../../components/Main-title";
import {HiOutlineMail} from "react-icons/hi";
import {RiMessengerLine} from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
// ------------------------

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jbcy47n', 'template_w6msn3j', form.current, 'k3mJRFA8CphnBkLfS');
        
        e.target.reset();
    };
    return (
        <>
            <div id="contact" className="contact pb-24">
                <MainTitle msg="Get In Touch" title="Contact Me"/>
                <div className="container mx-auto px-5">
                    <div className="content flex flex-col gap-20 lg:flex-row">
                        {/* Boxes */}
                        <div className="col flex flex-col items-center gap-5">
                            {/* Box-1 */}
                            <div className="row w-80 flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11 hover:bg-transparent border-slate-800 border-2 duration-300">
                                <HiOutlineMail className="text-4xl text-white"/>
                                <p className="text-3xl text-white mt-4 mb-1 font-semibold">Email</p>
                                <span className="text-gray-500 font-bold">mohammedgomaa2522@gmail.com</span>
                                <a href="mailto:mohammedgomaa2522@gmail.com" target="_blank" className="main-color cursor-pointer font-medium text-lg mt-4" aria-label="email">Send a message</a>
                            </div>
                            {/* Box-2 */}
                            <div className="row w-80 flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11 hover:bg-transparent border-slate-800 border-2 duration-300">
                                <RiMessengerLine className="text-4xl text-white"/>
                                <p className="text-3xl text-white mt-4 mb-1 font-semibold">Messenger</p>
                                <span className="text-gray-500 font-bold">mohammedgomaa2522</span>
                                <a href="https://m.me/mohammedgomaa2522" target="_blank" className="main-color cursor-pointer font-medium text-lg mt-4" aria-label="message">Send a message</a>
                            </div>
                            {/* Box-3 */}
                            <div className="row w-80 flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11 hover:bg-transparent border-slate-800 border-2 duration-300">
                                <AiOutlineWhatsApp className="text-4xl text-white"/>
                                <p className="text-3xl text-white mt-4 mb-1 font-semibold">WhatsApp</p>
                                <span className="text-gray-500 font-bold">+20-1026-053-956</span>
                                <a href="https://api.whatsapp.com/send?phone=+201026053956" target="_blank" className="main-color cursor-pointer font-medium text-lg mt-4" aria-label="whatsapp">Send a message</a>
                            </div>
                        </div>
                        {/* Form */}
                        <form ref={form} onSubmit={sendEmail} className="form md:px-16 flex-1 text-center lg:text-left duration-500">
                            <input type="text" name="name" placeholder="Your Full Name" className="w-full p-4 mb-5 outline-none text-sky-400 font-semibold text-lg bg-transparent border-2 border-sky-800 rounded-md shadow-md focus:shadow-xl duration-300" />
                            <input type="email" name="email" placeholder="Your Email" className="w-full p-4 mb-5 outline-none text-sky-400 font-semibold text-lg bg-transparent border-2 border-sky-800 rounded-md shadow-md focus:shadow-xl duration-300" />
                            <textarea name="message" placeholder="Your Message" className="w-full h-40 max-h-60 p-4 outline-none text-sky-400 font-semibold text-lg bg-transparent border-2 border-sky-800 rounded-md shadow-md focus:shadow-xl duration-300"></textarea>
                            <button type="submit" className="main-btn main-bg w-fit hover:bg-transparent mt-3">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;