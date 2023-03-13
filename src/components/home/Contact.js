import React, { useState } from 'react'
import axios from 'axios'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = () => {
        if (name.length === 0) {
            alert("Name has left blank");
        }
        else if (email.length === 0) {
            alert("Email id has left blank");
        }
        else if (msg.length === 0) {
            alert("Message has left blank");
        } else {
            const url = 'http://localhost/webweaver/contact.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('email', email);
            fData.append('msg', msg);

            axios.post(url, fData)
                .then(response => alert(response.data))
                .catch(error => alert(error))
        }
    }

    return (
        <section className=" text-gray-100 px-8 py-12" style={{ fontFamily: "Inter" }} id="contact">
            <div className="text-center w-full">
            </div>
            <div className="max-w-screen-xl mt-24 px-5 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg row">
                <div className="flex flex-col col-sm-12 col-lg-6 justify-between">
                    <div>
                        <h2 className="sec-head">Contact Us</h2>
                        <div style={{ textAlign: "left" }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4216.17787491224!2d76.62343724797246!3d10.54100649288079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba80f7e6b326aeb%3A0x38a4fd95ab6db659!2sMANAYUNKIA%20Homestay!5e0!3m2!1sen!2sin!4v1678427248802!5m2!1sen!2sin"
                                style={{ border: "0", width: "100%", height: "60vh" }} allowFullScreen="" loading="lazy"
                                width='450' height='500' referrerPolicy="no-referrer-when-downgrade" title='iframe'></iframe>

                        </div>
                    </div>

                </div>
                <div className="col-sm-12 col-lg-6 mt-5" style={{ textAlign: "left" }}>
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={name} placeholder="" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                    </div>
                    <div className="mt-8">
                        <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
