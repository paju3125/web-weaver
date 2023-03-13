import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Booking() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mob, setMob] = useState('')
    const [roomtype, setRoomType] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [req, setReq] = useState('')
    const [guest, setGuest] = useState('')

    const handleSubmit = () => {
        console.log(name, email, mob, roomtype, checkIn, checkOut, req, guest)
        if (name.length === 0) {
            alert("Name has left blank");
        }
        else if (mob.length === 0) {
            alert("Mobile number has left blank");
        }
        else if (mob.length !== 10) {
            alert("Mobile number can be 10 digits long");
        }
        else if (email.length === 0) {
            alert("Email id has left blank");
        }
        else if (roomtype.length === 0) {
            alert("Room type has left blank");
        }
        else if (checkIn.length === 0) {
            alert("CheckIn has left blank");
        }
        else if (checkOut.length === 0) {
            alert("CheckOut has left blank");
        }
        else if (req.length === 0) {
            alert("Special request has left blank");
        }
        else if (guest.length === 0) {
            alert("Guest has left blank");
        }
        else {
            const url = 'http://localhost/webweaver/room_book.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('email', email);
            fData.append('mob', mob);
            fData.append('roomtype', roomtype);
            fData.append('checkIn', checkIn);
            fData.append('checkOut', checkOut);
            fData.append('req', req);
            fData.append('guest', guest);

            axios.post(url, fData)
                .then(response => alert(response.data))
                .catch(error => alert(error))
        }
    }

    return (
        <section id="booking">
            <h2 className="sec-head mt-2">Book Your stay here</h2>
            <div className="search-box container" >
                {/* method="post" action="book_room.php"  */}
                <form className="input-box">
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="b_name">Name</label>
                        <input className="form-control" type="text" name="" id="b_name" value={name} placeholder="Your good name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="b_mob">Mobile Number</label>
                        <input className="form-control" type="number" name="" id="b_mob" value={mob} placeholder="Your Mobile number" onChange={(e) => setMob(e.target.value)} />
                    </div>
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="b_email">Email-id</label>
                        <input className="form-control" type="email" name="" id="b_email" value={email} placeholder="your mail id" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="input-box mb-3">

                        <label className="form-label" htmlFor="cars">Room Type</label>
                        <select id="cars" className='form-select' value={roomtype} onChange={(e) => setRoomType(e.target.value)} >
                            <option value="">Select your room </option>
                            <option value="Deluxroom">Delux room </option>
                            <option value="Doubledelux">Double delux</option>
                            <option value="Executivedelux">Executive bedroom </option>
                        </select>
                    </div>
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="b_checkIn">Check-In Date</label>
                        <input className="form-control" type="date" name="" id="b_checkIn" value={checkIn} placeholder="01/01/2021" onChange={(e) => setCheckIn(e.target.value)} />
                    </div>
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="b_checkOut">Check-out Date</label>
                        <input className="form-control" type="date" name="" value={checkOut} id="b_checkOut" placeholder="01/01/2021" onChange={(e) => setCheckOut(e.target.value)} />
                    </div>
                    <div className="input-box mb-3">
                        <label className="form-label" htmlFor="special_requests">Special requests:</label>
                        <textarea className='form-control' id="special_requests" value={req} name="special_requests" onChange={(e) => setReq(e.target.value)} ></textarea>
                    </div>
                    <div className="input-box mb-5">
                        <label className="form-label" htmlFor="b_guest">Guests</label>
                        <input className="form-control" type="number" name="" id="b_guest" value={guest} placeholder="2" onChange={(e) => setGuest(e.target.value)} />
                    </div>

                    <div className="input-box mb-3 d-flex justify-content-center">
                        <input className="btn btn-warning" type="button" value="Book your accomodation now " onClick={handleSubmit} />
                    </div>
                </form>
            </div>


        </section>
    )
}
