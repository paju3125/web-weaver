import React from 'react'

export default function Booking() {
    return (
        <section id="booking">
            <h2 className="sec-head mt-2">Book Your stay here</h2>
            <div className="search-box container" >
                <form className="input-box" method="post" action="book_room.php" >
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="b_name">Name</label>
                        <input className="form-control" type="text" name="" id="b_name" placeholder="Your good name" />
                    </div>
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="b_mob">Mobile Number</label>
                        <input className="form-control" type="number" name="" id="b_mob" placeholder="Your Mobile number" />
                    </div>
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="b_email">Email-id</label>
                        <input className="form-control" type="email" name="" id="b_email" placeholder="your mail id" />
                    </div>

                    <div className="input-box mb-3">

                        <label className="form-label" htmlFor="cars">Room Type</label>
                        <select id="cars" className='form-select' >
                            <option value="Deluxroom">Select your room </option>
                            <option value="Deluxroom">Delux room </option>
                            <option value="Doubledelux">Double delux</option>
                            <option value="Executivedelux">Executive bedroom </option>

                        </select>
                    </div>
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="b_checkIn">Check-In Date</label>
                        <input className="form-control" type="date" name="" id="b_checkIn" placeholder="01/01/2021" />
                    </div>
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="b_checkOut">Check-out Date</label>
                        <input className="form-control" type="date" name="" id="b_checkOut" placeholder="01/01/2021" />
                    </div>
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="special_requests">Special requests:</label>
                        <textarea className='form-control' id="special_requests" name="special_requests"></textarea>
                    </div>
                    <div className="input-box mb-5">
                        <label className="form-label" htmlFor="b_guest">Guests</label>
                        <input className="form-control" type="number" name="" id="b_guest" placeholder="2" />
                    </div>

                    <div className="input-box mb-3 d-flex justify-content-center">
                        <input className="btn btn-warning" type="submit" value="Book your accomodation now " />
                    </div>
                </form>
            </div>


        </section>
    )
}
