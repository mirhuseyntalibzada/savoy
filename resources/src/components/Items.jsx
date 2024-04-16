import React from 'react'

function Items({ alldata }) {
    return (
        <div className='items-card'>
            <div className="img-container">
                <img src={alldata.img} alt="" />
                <img className='img2' src={alldata.img2} alt="" />
            </div>
            <div className="text-container">
                <h3>
                    <a href="#!">{alldata.title}</a>
                    <i class="fa-regular fa-heart"></i>
                </h3>
                <span>${alldata.price}.00</span>
            </div>
        </div>
    )
}

export default Items