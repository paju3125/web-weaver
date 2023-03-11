import React from 'react'
import About from './About'
import Banner from './Banner'
import Booking from './Booking'
import Contact from './Contact'
import Hotels from './Hotels'
import Story from './Story'
import Testinomials from './Testinomials'

export default function home() {
    return (
        <>
            <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            <div>
                <Banner />
                <Booking />
                <Story />
                <About />
                <Hotels />
                <Testinomials />
                <Contact />
            </div>
        </>
    )
}
