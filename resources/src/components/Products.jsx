import React from 'react'
import Items from './Items'
import shopItems from '../data/data'

function Products() {
    return (
        <section id='products'>
            <div className='products-nav'>
                <ul className='mobile-nav'>
                    <li><a href="#!">Categories</a></li>
                    <li><a href="#!">Filter</a></li>
                </ul>
                <ul className='nav'>
                    <li><a href="#!">All</a></li>
                    <li><a href="#!">Bags & Backpacks</a></li>
                    <li><a href="#!">Decoration</a></li>
                    <li><a href="#!">Essentials</a></li>
                    <li><a href="#!">Interior</a></li>
                </ul>
                <ul>
                    <li className='nav'><a href="#!">Filter</a></li>
                    <li><a href="#!"><span className='search'>Search</span> <i className="fa-solid fa-magnifying-glass"></i></a></li>
                </ul>
            </div>
            <div className="items">
                {shopItems.map(item=>(
                    <Items alldata = {item} />
                ))}
            </div>
            <button className='load-more'>
                <h3>Load More</h3>
            </button>
        </section>
    )
}

export default Products