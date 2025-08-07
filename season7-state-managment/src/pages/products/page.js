// app/products/page.js
"use client"

import ProductCard from "../../components/store/ProductCard"

const products = [
    {
        id: 1,
        name: "Modern Shoes",
        price: 49.99,
        image: "/Modern Shoes.jpeg"
    },
    {
        id: 2,
        name: "Stylish Bag",
        price: 89.99,
        image: "/Modern Shoes.jpeg"
    },
]


export default function ProductsPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
