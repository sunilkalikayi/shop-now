import React from 'react'
import "./Topsellers.css"
import TS_image1 from "../../assets/images/ts_image1.png"
import TS_image2 from "../../assets/images/ts_image2.png"
import TS_image3 from "../../assets/images/ts_image3.png"
import TS_image4 from "../../assets/images/ts_image4.png"
import ProductCard from '../item card/ProductCard'
function TopSellers() {
    var products = [
        {
            name: "Gray Polo Shirt",
            cost: "49.00",
            img: TS_image1,
        },
        {
            name: "Red Shirt ",
            cost: "69.00",
            img: TS_image2,
        },
        {
            name: "Pink Casual Shirt",
            cost: "29.00",
            img: TS_image3,
        },
        {
            name: "Blue Sweatshirt",
            cost: "39.00",
            img: TS_image4,
        },
        
    ];
    return (
        <div className="new_arivals_sec">
        <div className="new_arivals_title">Top Sellers</div>
        <div className="new_arivals_title_des">Browse our top-selling products!</div>
        <div className="new_arivals_products">
            {products.map((item, i) => {
                return (
                    <ProductCard
                        name={item.name}
                        cost={item.cost}
                        image={item.img}
                        key = {i}
                    />
                );
            })}
        </div>
        <button className='top_seller_btn'>SHOP NOW</button>
    </div>
    )
}

export default TopSellers
