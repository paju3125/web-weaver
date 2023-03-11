import React from 'react'

export default function Host() {
    return (
        <div className="hostcontainer row row-cols-1 row-cols-md-2 row-cols-lg-2" style={{
            fontFamily: 'Inter', margin: "12% 2%"
        }}>
            <div className="hosttext col">
                <h2>The Host</h2>
                <br />
                <p>
                    The Host, Dr. V. Wilsanand, is a retired Associate Professor. He is a Rank holder in M Sc LIFE SCIENCES from National Council of Educational Research and Training (NCERT), Govt. of India, Bhubaneswar (1990).  He has done his Doctoral research from National Institute of Oceanography (CSIR), Govt. of India, Goa (1996). He has done his Post Doctoral Research at Rajiv Gandhi Centre for Biotechnology (RGCB), Department of Biotechnology, Govt. of India, Thiruvananthapuram.
                    He was a scientific member of Indian expedition to Antarctica during 2002. His contribution to science is worth mentioning and has been highly acclaimed and recognized by scientific communities all over the world.

                </p>
            </div>
            <div className="col">
                <img className="hostimg" src="assets/img/a3.JPG  " alt="" />
            </div>
        </div>
    )
}
