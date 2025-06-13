import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Maincart = () => {
  const navigate = useNavigate();
  const [keranjang, setKeranjang] = useState([]);
  const [terpilih, setTerpilih] = useState([]);
  const [semuaTercentang, setSemuaTercentang] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("keranjang")) || [];
    setKeranjang(data);
  }, []);

  const updateKeranjang = (updated) => {
    localStorage.setItem("keranjang", JSON.stringify(updated));
    setKeranjang(updated);
  };

  const handleJumlah = (index, delta) => {
    const updated = [...keranjang];
    if (updated[index].jumlah + delta >= 1) {
      updated[index].jumlah += delta;
      updateKeranjang(updated);
    }
  };

  const handleHapus = (index) => {
    const updated = [...keranjang];
    updated.splice(index, 1);
    updateKeranjang(updated);
  };

  const handleCheckbox = (index) => {
    const updated = [...terpilih];
    const produk = keranjang[index];
    const existIndex = updated.findIndex(
      (item) => item.id === produk.id && item.size === produk.size
    );
    if (existIndex > -1) {
      updated.splice(existIndex, 1);
    } else {
      updated.push(produk);
    }
    setTerpilih(updated);
    setSemuaTercentang(updated.length === keranjang.length);
  };

  const handlePilihSemua = () => {
    if (semuaTercentang) {
      setTerpilih([]);
      setSemuaTercentang(false);
    } else {
      setTerpilih([...keranjang]);
      setSemuaTercentang(true);
    }
  };

  const handleCheckout = () => {
    if (terpilih.length === 0) {
      alert("Pilih produk terlebih dahulu untuk checkout.");
      
      return;
    }
    localStorage.setItem('produkBeli', JSON.stringify(terpilih))
    navigate('/checkout')
    const indexTerhapus = terpilih.map((p) =>
      keranjang.findIndex((k) => k.id === p.id && k.size === p.size)
    );
    const sisa = [...keranjang];
    indexTerhapus.sort((a, b) => b - a).forEach((i) => sisa.splice(i, 1));
    localStorage.setItem("produkBeli", JSON.stringify(terpilih));
    localStorage.setItem("keranjang", JSON.stringify(sisa));
    setKeranjang(sisa);
    setTerpilih([]);
    navigate("/checkout/:id");
  };

  const totalQty = terpilih.reduce((acc, item) => acc + item.jumlah, 0);
  const totalHarga = terpilih.reduce((acc, item) => acc + item.jumlah * item.price, 0);

  return (
    <div className="w-full mx-auto py-6">
      {keranjang.length === 0 ? (
        <p className="text-center text-gray-500 mt-52">Kamu belum memasukkan produk ke keranjang.</p>
      ) : (
        <>
          <div className="bg-white shadow-md rounded mb-1">
            <div className="flex flex-row items-center justify-between p-4">
              <div className="flex items-center gap-12 ">
                <input
                  type="checkbox"
                  className="h-6 w-6"
                  checked={semuaTercentang}
                  onChange={handlePilihSemua}
                />
                <h1 className="font-bold text-lg text-gray-600">Pilih Semua</h1>
              </div>
              <div className="flex flex-row items-center gap-2 px-5 space-x-32">
                <h1 className="font-bold text-lg text-gray-600">Harga Satuan</h1>
                <h1 className="font-bold text-lg text-gray-600">Kuantitas</h1>
                <h1 className="font-bold text-lg text-gray-600">Total Harga</h1>
                <h1 className="font-bold text-lg text-gray-600">Aksi</h1>
              </div>
            </div>
          </div>

          <div className="bg-white w-full shadow-md divide-y divide-gray-100">
            {keranjang.map((produk, index) => (
              <div key={index} className="flex flex-row items-center justify-between p-4 roumded-md">
                <div className="flex items-center ml-4 gap-4 w-full">
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={terpilih.includes(produk)}
                    onChange={() => handleCheckbox(index)}
                  />
                  <img
                    src={produk.image}
                    alt={produk.title}
                    className="w-20 h-20 rounded"
                  />
                  <p className="text-sm text-gray-800 w-36 truncate" title={produk.title}>
                    {produk.title}
                  </p>
                </div>
                <div className="flex items-center justify-between w-2/3 pr-4 space-x-32">
                  <h1 className="w-20 text-center font-bold text-gray-600">
                    ${produk.price.toLocaleString("en-US")}
                  </h1>
                  <div className="w-32 flex justify-center items-center gap-1">
                    <p
                      className="plus border w-8 text-center cursor-pointer"
                      onClick={() => handleJumlah(index, 1)}
                    >
                      +
                    </p>
                    <p className="jumlah border w-8 text-center">{produk.jumlah}</p>
                    <p
                      className="minus border w-8 text-center cursor-pointer"
                      onClick={() => handleJumlah(index, -1)}
                    >
                      -
                    </p>
                  </div>
                  <h1 className="w-24 text-center font-bold text-gray-600">
                    ${(produk.jumlah * produk.price).toLocaleString("en-US")}
                  </h1>
                  <h1
                    className="hapus w-20 text-center font-bold text-Primary hover:underline cursor-pointer"
                    onClick={() => handleHapus(index)}
                  >
                    Hapus
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-2 p-4 shadow-m bg-white rounded-2xl">
            <div className="flex items-center gap-4">
              <h1 className="font-bold text-lg text-gray-600">
                Total Produk: <span id="jumlahTotalProduk">({totalQty} Produk)</span>
              </h1>
              <h1 className="font-bold text-lg text-Primary">
                <span id="jumlahHargatotal">${totalHarga.toLocaleString("en-US")}</span>
              </h1>
            </div>
            <button
              id="checkButton"
              onClick={handleCheckout}
              className="beliSekarang h-10 w-40 p-1 border border-Primary text-Primary font-bold rounded-md text-sm hover:bg-Primary hover:text-white transition"
            >
              CheckOut
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export { Maincart };
