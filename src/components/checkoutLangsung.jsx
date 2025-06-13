import React, { useEffect, useState, useRef } from "react";

const formatHarga = (nominal) => {
  return `Rp ${Number(nominal * 16000).toLocaleString("id-ID")}`;
};

const PembayaranLangsung = () => {
  const [produkList, setProdukList] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);
  const [metodeDipilih, setMetodeDipilih] = useState(null);
  const kotakRef = useRef(null);
  const pilihanRef = useRef([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("beliSekarang"));

    if (data) {
      const produk = [data].map((item) => {
        const quantity = item.jumlah || item.quantity || 1;
        const subtotal = item.price * quantity;
        return { ...item, quantity, subtotal };
      });

      const total = produk.reduce((acc, curr) => acc + curr.subtotal, 0);

      setProdukList(produk);
      setTotalHarga(total);
    }
  }, []);

  const handleBayar = () => {
    if (totalHarga <= 0) {
      alert("Tidak ada produk yang dibeli.");
      return;
    }

    alert(`Pembayaran sebesar ${formatHarga(totalHarga)} sedang diproses...`);
    setTimeout(() => {
      alert("✅ Pembayaran berhasil!");
      // localStorage.clear();
    }, 2000);
  };

  const handlePilihMetode = (index) => {
    const elemen = pilihanRef.current[index];
    if (elemen && kotakRef.current) {
      kotakRef.current.style.transform = `translateY(${elemen.offsetTop - 6}px)`;
      kotakRef.current.style.opacity = "1";
      kotakRef.current.style.pointerEvents = "auto";
    }
    setMetodeDipilih(index);
  };

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Kiri */}
        <div className="lg:col-span-2 space-y-6">
          {/* Alamat */}
          <section className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg text-gray-700 mb-2">
                  Alamat Pengiriman
                </h2>
                <p className="text-gray-500">Jl. Bedahan</p>
                <h2 className="font-semibold text-lg text-gray-700 mt-4 mb-1">
                  Nama Penerima
                </h2>
                <p className="text-gray-500">Jepan</p>
              </div>
              <button className="border border-Primary text-Primary font-medium rounded-md px-4 py-2 hover:bg-Primary hover:text-white transition-all">
                Edit Alamat
              </button>
            </div>
          </section>

          {/* Detail Produk */}
          <section className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="font-bold text-xl mb-2 text-gray-800">
              Detail Pemesanan
            </h2>
            <h3 className="text-base font-semibold mb-4 text-Primary">TOKOV</h3>
            <div className="space-y-6">
              {produkList.length === 0 ? (
                <p className="text-center text-gray-500 py-10">
                  Tidak ada produk untuk ditampilkan.
                </p>
              ) : (
                produkList.map((produk, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-center border-b p-4 animate-fade-in"
                  >
                    <img
                      src={produk.image}
                      alt={produk.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex flex-col w-full">
                      <h2 className="font-semibold text-lg text-gray-700">
                        {produk.title}
                      </h2>
                      <p className="text-gray-600">Jumlah: {produk.quantity}</p>
                      <p className="text-Primary font-bold mt-1">
                        Harga Satuan: {formatHarga(produk.price)}
                      </p>
                      <p className="text-right font-bold mt-2">
                        Subtotal: {formatHarga(produk.subtotal)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>

        {/* Kolom Kanan */}
        <div className="sticky top-0 z-50 bg-white rounded-2xl p-6 shadow-lg h-fit">
          <h2 className="text-lg font-bold mb-4 text-center text-gray-800">
            Metode Pembayaran
          </h2>

          <div className="relative mb-4 h-52">
            <div
              ref={kotakRef}
              className="absolute w-full h-12 border-4 border-Primary rounded-lg opacity-0 pointer-events-none transition-all duration-300"
            ></div>
          </div>

          <div
            id="listPembayaran"
            className="flex flex-col space-y-4 font-medium text-gray-700 cursor-pointer"
          >
            {["OVO", "ALFAMART", "GOPAY", "COD", "DANA"].map(
              (metode, index) => (
                <p
                  key={index}
                  ref={(el) => (pilihanRef.current[index] = el)}
                  onClick={() => handlePilihMetode(index)}
                  className={`hover:bg-gray-100 p-2 rounded-md transition ${
                    metodeDipilih === index ? "text-Primary" : ""
                  }`}
                >
                  {metode}
                </p>
              )
            )}
          </div>

          <div className="border-t mt-6 pt-4">
            <div className="flex justify-between text-base font-semibold mb-2">
              <span>Total Tagihan</span>
              <span className="text-Primary">{formatHarga(totalHarga)}</span>
            </div>
            <button
              onClick={handleBayar}
              className="beliSekarang w-full py-3 mt-4 bg-Primary text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md"
            >
              Bayar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PembayaranLangsung };
