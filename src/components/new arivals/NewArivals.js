import React from "react";
import ProductCard from "../item card/ProductCard";
import Product1 from "../../assets/images/product1.png"
import Product2 from "../../assets/images/product2.png"
import Product3 from "../../assets/images/product3.png"
import Product4 from "../../assets/images/product4.png"
import Product5 from "../../assets/images/product5.png"
import Product6 from "../../assets/images/product6.png"
import Product7 from "../../assets/images/product7.png"
import Product8 from "../../assets/images/product8.png"
import "./NewArivals.css"

export default function NewArivals() {
    var products = [
        {
            name: "Plain White Shirt",
            cost: "29.00",
            img: Product1,
        },
        {
            name: "Denim Jacket ",
            cost: "69.00",
            img: Product2,
        },
        {
            name: "Black Polo Shirt",
            cost: "49.00",
            img: Product3,
        },
        {
            name: "Blue Sweatshirt",
            cost: "79.00",
            img: Product4,
        },
        {
            name: "Blue Plain Shirt",
            cost: "49.00",
            img: Product5,
        },
        {
            name: "Dark Blue Shirt",
            cost: "19.00",
            img: Product6,
        },
        {
            name: "Outcast T Shirt",
            cost: "9.00",
            img: Product7,
        },
        {
            name: "Polo Plain Shirt",
            cost: "39.00",
            img: Product8,
        },
    ];
    return (
        <div className="new_arivals_sec">
            <div className="new_arivals_title">Discover NEW Arrivals</div>
            <div className="new_arivals_title_des">Recently added shirts!</div>
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
        </div>
    );
}
