import React from 'react'

export default function Banner() {
    return (
        <section className="banner">
            <div className="content">
                <video autoPlay loop muted plays-inline="true">
                    <source src="assets/img/thumbvid.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}
