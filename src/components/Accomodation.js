import React from 'react'

export default function Accomodation() {
    return (
        <div style={{ margin: "10% 2%" }}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 w-100 g-4 mt-5 d-flex justify-content-around">
                <div className="col" style={{ width: "22rem", height: "32rem" }}>
                    <div className="card room-type h-100" >
                        <img src="assets/img/ds1.JPG" alt="deluxeRoom" />
                        <div className="card-body">
                            <h2>Deluxe Suite with Balcony</h2>
                            <p className="description">Our most luxurious room, with a king-size bed, private balcony, and ocean view.</p>
                            <p className="price">$200 per night</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="button">Book now</a>
                        </div>
                    </div>
                </div>

                <div className="col" style={{ width: "22rem", height: "32rem" }}>
                    <div className="card room-type col h-100">
                        <img src="assets/img/ds2.JPG" alt="deluxeRoom1" />
                        <div className="card-body">
                            <h2>Deluxe Suite with Balcony</h2>
                            <p className="description">Our most luxurious room, with a king-size bed, private balcony, and ocean view.</p>
                            <p className="price">$200 per night</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="button">Book now</a>
                        </div>
                    </div>
                </div>


                <div className="col" style={{ width: "22rem", height: "32rem" }}>
                    <div className="card room-type col h-100">
                        <img src="assets/img/dr1.JPG" alt="deluxeRoom2" />
                        <div className="card-body">
                            <h2>Deluxe Bedroom with balcony</h2>
                            <p className="description">A comfortable room with a queen-size bed and garden view.</p>
                            <p className="price">$100 per night</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="button">Book now</a>
                        </div>
                    </div>
                </div>

                <div className="col" style={{ width: "22rem", height: "32rem" }}>
                    <div className="card room-type col h-100">
                        <img src="assets/img/sr1.JPG" alt="Standardroom 2" />
                        <div className="card-body">
                            <h2>Standard Bedroom</h2>
                            <p className="description">A comfortable room with a queen-size bed and garden view.</p>
                            <p className="price">$100 per night</p>
                        </div>
                        <div className="card-body">
                            <a href="index.html#booking" className="button">Book now</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
