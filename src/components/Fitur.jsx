    import React from "react";
    import Ajakan1 from "../assets/image/Ajakan1.png";
    import Ajakan2 from "../assets/image/Ajakan2.png";
    import Ajakan3 from "../assets/image/Ajakan3.png";


    const Fitur = () => {
        return (
            <>
            <section className="bg-white w-full mt-12 shadow-xl p-8 rounded-3xl border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Transparan */}
            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-gray-300 bg-white transition hover:shadow-xl hover:scale-105 hover:border-Primary">
            <div className="p-4 rounded-full">
                <img src={Ajakan2} alt="Transparan" className="w-24 h-24 object-contain" />
            </div>
            <h2 className="text-xl font-bold text-Primary">Transparan</h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xs">
                Pembayaran anda baru diteruskan ke Penjual setelah barang anda terima
            </p>
            </div>

            {/* Gratis Ongkir */}
            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-gray-200 bg-white transition hover:shadow-xl hover:scale-105 hover:border-Primary">
            <div className="p-4 rounded-full">
                <img src={Ajakan1} alt="Gratis Ongkir" className="w-16 h-16 object-contain" />
            </div>
            <h2 className="text-xl font-extrabold text-Primary">Gratis Ongkir</h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xs">
                Setiap Minggu, pengguna mendapatkan 2 kali kesempatan untuk memesan barang tanpa ongkir
            </p>
            </div>

            {/* Original */}
            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-gray-200 bg-white transition hover:shadow-xl hover:scale-105 hover:border-Primary">
            <div className="bg-Primary/10 p-4 rounded-full hover:bg-Primary/20 transition-colors duration-300">
                <img src={Ajakan3} alt="Original" className="w-16 h-16 object-contain" />
            </div>
            <h2 className="text-xl font-extrabold text-Primary">Original</h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xs hover:text-black/80 transition-colors duration-300">
                Produk yang ada di TOKOV merupakan produk asli dan berkualitas
            </p>
            </div>
        </div>
        </section>

            </>
        )
    }

    export { Fitur }