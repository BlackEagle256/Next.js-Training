"use client"

import { useCartStore } from "../../components/store/cartStore"

const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore()
    console.log(product)
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
