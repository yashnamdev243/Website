// // ProductsPage.jsx
// import React, { useEffect, useState } from "react";
// import { Card, Spin, Pagination } from "antd";
// import { motion } from "framer-motion";
// import axios from "axios";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);

//   const fetchProducts = (currentPage = 1) => {
//     setLoading(true);
//     axios.get(`https://dummyjson.com/products?limit=6&skip=${(currentPage - 1) * 6}`)
//       .then((res) => {
//         setProducts(res.data.products);
//         setTotal(res.data.total);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch products:", err);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchProducts(page);
//   }, [page]);

//   return (
//     <div className="min-h-screen bg-[#fffaf2] px-4 py-10 md:px-16 lg:px-32 text-[#2f2f2f]">
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-[#7f4a18] mb-10">
//         Our Narmada Shivlings
//       </h1>

//       {loading ? (
//         <div className="flex justify-center items-center min-h-[200px]">
//           <Spin size="large" />
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <motion.div
//               key={product.id}
//               whileHover={{ scale: 1.03 }}
//               className="shadow-md border border-[#e0d6c7] rounded-xl overflow-hidden"
//             >
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//                 <p className="text-sm text-gray-600">{product.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}

//       <div className="flex justify-center mt-12">
//         <Pagination
//           current={page}
//           total={total}
//           pageSize={6}
//           onChange={(newPage) => setPage(newPage)}
//         />
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saved);
  }, []);

  return (
    <div className="min-h-screen bg-[#fffef9] px-6 py-12 md:px-20 lg:px-40 text-[#2f2f2f]">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#7f4a18] mb-8">
        Our Products
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-lg font-semibold text-[#7f4a18]">{product.name}</h3>
            <p className="text-sm mt-1 text-gray-700">{product.description}</p>
            <p className="text-md font-bold mt-2">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
