import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const potongTeks = (teks, maxLength) => {
  return teks.length > maxLength ? teks.slice(0, maxLength) + '...' : teks;
};

const ListProduk = () => {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jumlahTampil, setJumlahTampil] = useState(5); // awalnya 5 produk
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProduk(data); // simpan semua data
        setLoading(false);
      })
      .catch(error => {
        console.error("Jaringan buruk mohon muat kembali", error);
        setLoading(false);
      });
  }, []);

  const toggleWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const sudahAda = wishlist.find(item => item.id === product.id);

    if (!sudahAda) {
      wishlist.push(product);
      alert('Produk ditambahkan ke wishlist');
    } else {
      wishlist = wishlist.filter(item => item.id !== product.id);
      alert('Produk dihapus dari wishlist');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };

  const tambahKeranjang = (product) => {
    const produkBaru = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      jumlah: 1,
    };

    let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
    const produkLama = keranjang.find(item => item.id === produkBaru.id);
    if (produkLama) {
      produkLama.jumlah++;
    } else {
      keranjang.push(produkBaru);
    }
    localStorage.setItem('keranjang', JSON.stringify(keranjang));
    alert('Produk berhasil ditambahkan ke keranjang!');
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white mt-12 shadow-md rounded-xl">
      <div className="h-16 p-4 shadow-md flex flex-row items-center gap-2">
        <FaStar className="text-4xl text-amber-300 hover:text-amber-400" />
        <h1 className="font-bold text-2xl">Untuk Kamu</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {produk.slice(0, jumlahTampil).map((product) => {
          const potonganJudul = potongTeks(product.title, 40);
          const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
          const sudahAda = wishlist.find(item => item.id === product.id);

          return (
            <div
              key={product.id}
              className="bg-white w-60 shadow-xl p-4 flex flex-col justify-between transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => {
                localStorage.setItem('detailProduk', JSON.stringify(product));
                navigate("/detail");
              }}
            >
              <div>
                <img src={product.image} alt={product.title} className="w-40 h-40 object-contain mx-auto" />
                <p className="title text-md mt-2" title={product.title}>{potonganJudul}</p>
                <p className="price text-md font-bold">Rp{(product.price * 16000).toLocaleString('id-ID')}</p>
                <p className="cod text-sm font-bold text-blue-600">Bisa COD</p>
                <p className="sold text-sm">{product.rating.count} Terjual</p>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 32C167.67 32 96 96.51 96 176
                      c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144
                      m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"/>
                  </svg>
                  <p className="text-sm">Jakarta</p>
                </div>
              </div>

              <div className="flex items-center justify-end mt-4 gap-4">
                <FaShoppingCart
                  className="text-3xl text-gray-400 hover:text-blue-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    tambahKeranjang(product);
                  }}
                />

                <MdFavorite
                  className={`text-3xl cursor-pointer transition ${sudahAda ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center p-4">
  <button
    className={`border px-6 py-2 rounded-xl font-bold transition ${
      jumlahTampil < 20
        ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
    }`}
    onClick={() => setJumlahTampil(jumlahTampil < 20 ? 20 : 5)}
  >
    {jumlahTampil < 20 ? 'Muat Lebih Banyak' : 'Lihat Lebih Dikit'}
  </button>
</div>

    </div>
  );
};

export { ListProduk };
