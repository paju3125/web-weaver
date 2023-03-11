import React from 'react'
import { Link } from 'react-router-dom'

export default function NavComp(props) {
    return (
        <div>
            {props.showImage}
            {/* <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link> */}
            {/* <header className="header" id="header" style={{ fontFamily: "Inter", background: "rgb(255, 255, 255)" }}>
                <nav className="nav container">

                    <b>
                        <Link to="/" className="nav__logo" style={{ fontFamily: 'Product Sans Bold', letterSpacing: "-.5px", fontSize: "1.5rem" }}>
                            <img src="assets/img/logo.png" alt='' width="140" height="140" />
                        </Link>
                    </b>
                    {props.showImage && <div>
                        <img src="assets/img/datehead.png" alt="" height="130" width="130" />
                    </div>}
                    <div className="nav__menu" id="nav-menu">

                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/" className="nav__link font-medium leading-6 text-black-600 transition duration-150 ease-out hover:text-gray-600">Home</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/story" className="nav__link font-medium leading-6 text-black-600 transition duration-150 ease-out hover:text-gray-600">The Story</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/host" className="nav__link font-medium leading-6 text-black-600 transition duration-150 ease-out hover:text-gray-600">The Host</Link>
                            </li>
                            <li className="nav__item">
                                <div className="dropdown">
                                    <Link to="/accomodation" className="nav__link font-medium leading-6 text-black-600 transition duration-150 ease-out hover:text-gray-600">
                                        Accommodation
                                        <img src="assets/img/down-chevron-svgrepo-com.svg" alt='' />
                                    </Link>
                                    <div className="menu">
                                        <Link to="/accomodation">Delux room</Link>
                                        <Link to="/accomodation">Double delux</Link>
                                        <Link to="/accomodation">Executive bedroom </Link>

                                    </div>
                                </div>

                            </li>
                            <li className="nav__item">
                                <div className="dropdown">
                                    <Link to="/facilities" className="nav__link font-medium leading-6 text-black-600 transition duration-150 ease-out hover:text-gray-600">
                                        Facilities
                                        <img src="assets/img/down-chevron-svgrepo-com.svg" alt='' />
                                    </Link>
                                    <div className="menu">
                                        <Link to="/facilities">Car Parking

                                        </Link>
                                        <Link to="/facilities">Kids Garden
                                        </Link>
                                        <Link to="/facilities">Living Room
                                        </Link>
                                        <Link to="/facilities">Kitchen
                                        </Link>
                                        <Link to="/facilities">Living Room
                                        </Link>
                                        <Link to="/facilities"> Dining
                                        </Link>
                                        <Link to="/facilities"> Barbeque
                                        </Link>
                                        <Link to="/facilities">Terrace
                                        </Link>
                                        <Link to="/facilities"> Laundry
                                        </Link>
                                        <Link to="/facilities"> Ironing
                                        </Link>
                                    </div>
                                </div>

                            </li>
                            <li className="nav__item">
                                <Link to="/gallery" className="nav__link font-medium leading-6 text-black-600 transition duration-150 ease-out hover:text-gray-600">Gallery</Link>
                            </li>
                            <li className="nav__item">
                                <div className="dropdown">
                                    <Link to="/attractions" className="nav__link font-medium leading-6 text-black-600 transition duration-150 ease-out hover:text-gray-600">
                                        Local Attractions
                                        <img src="assets/img/down-chevron-svgrepo-com.svg" alt='' />
                                    </Link>
                                    <div className="menu">
                                        <Link to="attractions">Neilliyampathy Hills

                                        </Link>
                                        <Link to="attractions">Pothundy Dam
                                        </Link>
                                        <Link to="attractions">Pothundy Siva Temple
                                        </Link>
                                        <Link to="attractions">Nellikulangara  Bhagavathi Temple,  Nemmara
                                        </Link>
                                        <Link to="attractions">Meenkulathil Amman Temple, Pallassena
                                        </Link>
                                        <Link to="attractions"> Thiru Kachamkurissi Temple
                                        </Link>
                                        <Link to="attractions"> Kalari Kovilakom
                                        </Link>
                                        <Link to="attractions">Seetharkundu waterfalls, kollenkode
                                        </Link>
                                        <Link to="attractions"> Parambikulam Wildlife Sanctuary
                                        </Link>

                                    </div>
                                </div>

                            </li>

                        </ul>
                    </div>
                    <div className="nav__toggle" id="nav-toggle">
                        <i className='bx bx-grid-alt'></i>
                    </div>
                    <Link to="#contact" className="button button__header focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Contact us</Link>
                </nav>
            </header> */}
            {/* <header className="header" id="header" style={{ fontFamily: "Inter", background: "rgb(255, 255, 255)" }}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> <Link to="/" >
                            <img src="assets/img/logo.png" alt='' width="140" height="140" />
                        </Link></a>
                        <div>
                            <img src="assets/img/datehead.png" alt="" height="70" width="130" />
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/story">The Story</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/host">The Host</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/accomodation" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Accomodation
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/accomodation">Delux Room</Link></li>
                                        <li><Link className="dropdown-item" to="/accomodation"> Double delux</Link></li>
                                        <li><Link className="dropdown-item" to="/accomodation">Executive bedroom</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/facilities" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Facilities
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/facilities">Cars Parking</Link></li>
                                        <li><Link className="dropdown-item" to="/facilities"> Kids Garden</Link></li>
                                        <li><Link className="dropdown-item" to="/facilities">Living Room</Link></li>
                                        <li><Link className="dropdown-item" to="/facilities">Kitchen</Link></li>
                                        <li><Link className="dropdown-item" to="/facilities">Dining</Link></li>
                                        <li><Link className="dropdown-item" to="/facilities">Barbeque</Link></li>
                                        <li><Link className="dropdown-item" to="/facilities">Terrace</Link></li>
                                        <li><Link className="dropdown-item" to="/facilities">Laundry</Link></li>
                                        <li><Link className="dropdown-item" to="/facilities">Ironing</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gallery">Gallery</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/attractions" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Local Attractions
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/attractions">Neilliyampathy Hills</Link></li>
                                        <li><Link className="dropdown-item" to="/attractions"> Pothundy Dam
                                        </Link></li>
                                        <li><Link className="dropdown-item" to="/attractions">Pothundy Siva Temple
                                        </Link></li>
                                        <li><Link className="dropdown-item" to="/attractions">Nellikulangara  Bhagavathi Temple,  Nemmara
                                        </Link></li>
                                        <li><Link className="dropdown-item" to="/attractions">Meenkulathil Amman Temple, Pallassena
                                        </Link></li>
                                        <li><Link className="dropdown-item" to="/attractions"> Thiru Kachamkurissi Temple
                                        </Link></li>
                                        <li><Link className="dropdown-item" to="/attractions"> Kalari Kovilakom
                                        </Link></li>
                                        <li><Link className="dropdown-item" to="/attractions">Seetharkundu waterfalls, kollenkode
                                        </Link></li>
                                        <li><Link className="dropdown-item" to="/attractions"> Parambikulam Wildlife Sanctuary
                                        </Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <button className="btn btn-warning rounded-pill" type="submit">Contact us</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header> */}

            <header className="header" id="header" style={{ fontFamily: "Inter", background: "#FFAA01" }}>
                <div className="container-fluid px-0 d-flex justify-content-center" >
                    <nav className="navbar navbar-expand-lg navbar-dark text-light  py-0 px-0">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img id="logo" alt='' src="assets/img/logo.png" /></a>
                            {props.showImage && <a className="navbar-brand" href="#"><img id="logo2" alt='' src="assets/img/datehead.png" /></a>}

                            <span className="v-line"></span>
                            <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" style={{ color: "#000" }}></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/story">The Story</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/host">The Host</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/accomodation" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Accomodation
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/accomodation">Delux Room</Link></li>
                                            <li><Link className="dropdown-item" to="/accomodation"> Double delux</Link></li>
                                            <li><Link className="dropdown-item" to="/accomodation">Executive bedroom</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/facilities" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Facilities
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/facilities">Cars Parking</Link></li>
                                            <li><Link className="dropdown-item" to="/facilities"> Kids Garden</Link></li>
                                            <li><Link className="dropdown-item" to="/facilities">Living Room</Link></li>
                                            <li><Link className="dropdown-item" to="/facilities">Kitchen</Link></li>
                                            <li><Link className="dropdown-item" to="/facilities">Dining</Link></li>
                                            <li><Link className="dropdown-item" to="/facilities">Barbeque</Link></li>
                                            <li><Link className="dropdown-item" to="/facilities">Terrace</Link></li>
                                            <li><Link className="dropdown-item" to="/facilities">Laundry</Link></li>
                                            <li><Link className="dropdown-item" to="/facilities">Ironing</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/gallery">Gallery</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/attractions" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Local Attractions
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/attractions">Neilliyampathy Hills</Link></li>
                                            <li><Link className="dropdown-item" to="/attractions"> Pothundy Dam
                                            </Link></li>
                                            <li><Link className="dropdown-item" to="/attractions">Pothundy Siva Temple
                                            </Link></li>
                                            <li><Link className="dropdown-item" to="/attractions">Nellikulangara  Bhagavathi Temple,  Nemmara
                                            </Link></li>
                                            <li><Link className="dropdown-item" to="/attractions">Meenkulathil Amman Temple, Pallassena
                                            </Link></li>
                                            <li><Link className="dropdown-item" to="/attractions"> Thiru Kachamkurissi Temple
                                            </Link></li>
                                            <li><Link className="dropdown-item" to="/attractions"> Kalari Kovilakom
                                            </Link></li>
                                            <li><Link className="dropdown-item" to="/attractions">Seetharkundu waterfalls, kollenkode
                                            </Link></li>
                                            <li><Link className="dropdown-item" to="/attractions"> Parambikulam Wildlife Sanctuary
                                            </Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <form className="d-flex align-items-center h-100" role="search">
                                            <button className="btn btn-warning rounded-pill" type="submit">Contact us</button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}
