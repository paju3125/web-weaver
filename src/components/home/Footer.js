import React from 'react'

export default function Footer() {
    return (
        <div className="footer-dark" style={{ fontFamily: "Inter" }}>
            <footer>
                <div className="bscontainer">
                    <div className="bsrow">
                        <div className="bscol-md-2 item">
                            <h3>Pages</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="pages/map.html">The Story</a></li>
                                <li><a href="host.html">The Host</a></li>
                                <li><a href="accomodation.html">Accommodation</a></li>
                                <li><a href="facilities.html">Facilities</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                            </ul>
                        </div>
                        <div className="bscol-md-2 item">
                            <h3></h3>
                            <ul>

                            </ul>
                        </div>
                        <div className="bscol-md-2 item">
                            <h3></h3>
                            <ul>

                            </ul>
                        </div>
                        <div className="bscol-md-6 item text">
                            <h3>Manayunkia Homestay</h3>
                            <p>
                                Manayunkia Residential Homestay is a house constructed in adherence with Vastu Shastra, encircled by beautiful, calm and pristine nature on all four sides. It is located opposite to adventure park of Pothundy Dam, Nemmara village, in the Palakkad district,
                                State of Kerala, India
                            </p>
                        </div>
                        <div className="social_links">
                            <a href="https://www.instagram.com/">
                                <span className="fa-stack fa-lg ig combo">
                                    <i className="fa fa-circle fa-stack-2x circle"></i>
                                    <i className="fa fa-instagram fa-stack-1x fa-inverse icon"></i>
                                </span>
                            </a>
                            <a href="https://www.facebook.com/">
                                <span className="fa-stack fa-lg fb combo">
                                    <i className="fa fa-circle fa-stack-2x circle"></i>
                                    <i className="fa fa-facebook fa-stack-1x fa-inverse icon"></i>
                                </span>
                            </a>
                            <a href="https://www.youtube.com/">
                                <span className="fa-stack fa-lg yt combo">
                                    <i className="fa fa-circle fa-stack-2x circle"></i>
                                    <i className="fa fa-youtube-play fa-stack-1x fa-inverse icon"></i>
                                </span>
                            </a>
                            <a href="https://www.twitter.com/">
                                <span className="fa-stack fa-lg tw combo">
                                    <i className="fa fa-circle fa-stack-2x circle"></i>
                                    <i className="fa fa-twitter fa-stack-1x fa-inverse icon"></i>
                                </span>
                            </a>


                        </div>
                    </div>
                    <p className="copyright">Manayunkia homestay © 2023</p>
                </div>
            </footer>
        </div>

    )
}
