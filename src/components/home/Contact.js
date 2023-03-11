import React from 'react'

export default function Contact() {
    return (
        <section className=" text-gray-100 px-8 py-12" style={{ fontFamily: "Inter" }} id="contact">
            <div className="text-center w-full">
            </div>
            <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="sec-head">Contact Us</h2>
                        <div style={{ textAlign: "left" }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4216.17787491224!2d76.62343724797246!3d10.54100649288079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba80f7e6b326aeb%3A0x38a4fd95ab6db659!2sMANAYUNKIA%20Homestay!5e0!3m2!1sen!2sin!4v1678427248802!5m2!1sen!2sin"
                                width="550" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='iframe'></iframe>

                        </div>
                    </div>

                </div>
                <div className="" style={{ textAlign: "left" }}>
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
