import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailProduct = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("detailProduk"));
    if (storedProduct) {
      setProduct(storedProduct);
      fetchRecommendedProducts(storedProduct.category);
      checkWishlist(storedProduct.id);
    }
  }, []);

  const fetchRecommendedProducts = async (category) => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      console.log(data);
      setRecommendedProducts(data.filter((p) => p.id !== product?.id));
    } catch (err) {
      console.error("Gagal fetch produk rekomendasi:", err);
    }
  };

  const checkWishlist = (id) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.some((item) => item.id === id);
    setIsFavorite(exists);
  };

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.some((item) => item.id === product.id);

    const newWishlist = exists
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    setIsFavorite(!exists);
  };

  const addToCart = () => {
    if (!selectedSize && product.category.includes("clothing")) {
      alert("Pilih ukuran terlebih dahulu!");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...product, size: selectedSize, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produk berhasil ditambahkan ke keranjang!");
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!product) return <p>Memuat produk...</p>;

  return (
    <>
      <div className="bg-white flex flex-wrap py-12 mt-8 gap-2 w-full">
        <div className="flex flex-row justify-between w-full">
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-96">
              <img
                src={product.image}
                alt={product.title}
                className="w-60 h-full object-contain"
              />
            </div>

            {product.category.includes("clothing") && (
              <div className="mt-4 py-4 border-t border-gray-200">
                <h2>Pilih ukuran</h2>
                <div
                  className="flex flex-row text-Primary
                 text-lg font-bold py-4 space-x-8 items-start"
                >
                  {["M", "L", "XL", "XXL"].map((ukuran) => (
                    <div
                      key={ukuran}
                      className={`ukuran border border-4 rounded-xl w-12 h-12 text-center p-2 cursor-pointer ${
                        selectedSize === ukuran
                          ? "bgPrimary text-white border-Primary"
                          : "border-Primary hover:bg-Primary hover:text-white"
                      }`}
                      onClick={() => handleSizeClick(ukuran)}
                    >
                      <p>{ukuran}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2 ml-8 mt-2">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <div className="flex flex-row items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#dfbc00"
                  d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
                />
              </svg>
              <span className="text-lg">{product.rating.rate}</span>
              <span className="text-lg text-gray-600 ml-4">
                Terjual {product.rating.count}
              </span>
              <svg
                onClick={toggleWishlist}
                xmlns="http://www.w3.org/2000/svg"
                className="wishlist-icon w-6 h-6 ml-8 cursor-pointer"
                viewBox="0 0 48 48"
              >
                <path
                  className="heart-path"
                  fill={isFavorite ? "#246BFD" : "none"}
                  stroke="#246BFD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"
                />
              </svg>
            </div>

            <div className="mt-8 py-4 border-t border-gray-200">
              <h2 className="text-xl font-bold">Deskripsi Produk</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 mt-16">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium">Jumlah:</h3>
                <div className="flex items-center border border-gray-300">
                  <div className="totalJum flex flex-row justify-center">
                    <p
                      onClick={increaseQuantity}
                      className="border border-gray-300 w-12 px-4 cursor-pointer select-none"
                    >
                      +
                    </p>
                    <p className="border border-gray-300 w-12 px-5 cursor-default select-none">
                      {quantity}
                    </p>
                    <p
                      onClick={decreaseQuantity}
                      className="border border-gray-300 w-12 px-4 cursor-pointer select-none"
                    >
                      -
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-4 space-y-2">
                <button
                  onClick={() => {
                    const dataBeli = {
                      ...product,
                      quantity,
                      size: selectedSize,
                    };
                    localStorage.setItem(
                      "beliSekarang",
                      JSON.stringify(dataBeli)
                    );
                    navigate(`/checkout/${product.id}`);
                  }}
                  className="beliSekarang h-10 w-full p-1 border border-Primary text-Primary font-bold rounded-md text-sm hover:bg-Primary hover:text-white transition cursor-pointer"
                >
                  Beli Sekarang
                </button>
                <button
                  onClick={addToCart}
                  className="tambahKeranjang h-10 w-full p-1 border border-Primary text-Primary font-bold rounded-md text-sm hover:bg-Primary hover:text-white transition cursor-pointer"
                >
                  + Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { DetailProduct };
