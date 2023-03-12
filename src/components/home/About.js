import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <section className="text-gray-600 body-font" id="about" style={{ fontFamily: 'Inter', marginTop: "12%" }}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" style={{ margin: "auto", width: "100%" }}>
                <div style={{ alignItems: "left" }}>
                    <img src="assets/img/aboutus.png" style={{ borderRadius: "10px" }} width="700" height="700" alt="" /></div>


                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="sec-head"> The Story
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify" style={{ width: "auto" }}>Manayunkia Residential Homestay is a house constructed in adherence with Vastu Shastra, encircled by beautiful, calm, and pristine nature on all four sides. It is located opposite the adventure park of Pothundy Dam in Nemmara village,
                        in the Palakkad district of the State of Kerala, India. On the way to Neilliyampathy Hills, it is about 8 kilometers (5.0 mi) from Nemmara, 42 kilometers (26 mi) from Palakkad, and 21 kilometers (13 mi) from Nelliampathy.</p>
                    <div className="flex justify-center">
                        <span className="inline-flex rounded-md shadow-sm">
                            <Link to="/story" className="button button__header focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Know More</Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
