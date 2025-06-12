import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Maincart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

    const keranjangContainer = document.getElementById("KeranjangProduk");
    const totalProduk = document.getElementById("jumlahTotalProduk");
    const totalHarga = document.getElementById("jumlahHargatotal");
    const kotakPesan = document.getElementById("pesan-kosong");
    const check = document.getElementById("bagianCheck");
    const checkboxPilihSemua = document.getElementById("pilihSemua");

    if (!checkboxPilihSemua) return;

    function renderKeranjang() {
      keranjangContainer.innerHTML = "";
      if (keranjang.length === 0) {
        kotakPesan.classList.remove("hidden");
        check.classList.add("hidden");
        return;
      } else {
        kotakPesan.classList.add("hidden");
      }

      keranjang.forEach((produk, index) => {
        const hargaTotal = produk.jumlah * produk.price;
        const item = document.createElement("div");
        item.className = "w-full max-w-7xl mx-auto border-b space-y-12";
        item.innerHTML = `
          <div class="flex flex-row items-center justify-between p-4">
            <div class="flex items-center ml-4 gap-4 w-1/3">
              <input type="checkbox" class="h-5 w-5 checkboxProduk" data-index="${index}" data-harga="${produk.price}" />
              <img src="${produk.image}" alt="${produk.title}" class="w-20 h-20 object-cover rounded" />
              <p class="text-sm text-gray-800 w-36 truncate" title="${produk.title}">${produk.title}</p>
            </div>
            <div class="flex items-center justify-between w-2/3 pr-4 space-x-32">
              <h1 class="w-20 text-center font-bold text-gray-600">$${produk.price.toLocaleString("en-US")}</h1>
              <div class="w-32 flex justify-center items-center gap-1">
                <p class="plus border w-8 text-center cursor-pointer">+</p>
                <p class="jumlah border w-8 text-center">${produk.jumlah}</p>
                <p class="minus border w-8 text-center cursor-pointer">-</p>
              </div>
              <h1 class="w-24 text-center font-bold text-gray-600">$${hargaTotal.toLocaleString("en-US")}</h1>
              <h1 class="hapus w-20 text-center font-bold text-[var(--primary-color)] hover:underline cursor-pointer">Hapus</h1>
            </div>
          </div>
        `;

        item.querySelector(".plus").addEventListener("click", () => {
          produk.jumlah++;
          updateKeranjang();
        });

        item.querySelector(".minus").addEventListener("click", () => {
          if (produk.jumlah > 1) {
            produk.jumlah--;
            updateKeranjang();
          }
        });

        item.querySelector(".hapus").addEventListener("click", () => {
          keranjang.splice(index, 1);
          updateKeranjang();
        });

        const checkbox = item.querySelector(".checkboxProduk");
        checkbox.addEventListener("change", updateTotalTercentang);

        keranjangContainer.appendChild(item);
      });

      updateTotalTercentang();
      check.classList.remove("hidden");
    }

    function updateKeranjang() {
      localStorage.setItem("keranjang", JSON.stringify(keranjang));
      renderKeranjang();
    }

    function updateTotalTercentang() {
      const checkboxes = document.querySelectorAll(".checkboxProduk:checked");
      let totalQty = 0;
      let totalHargaAll = 0;

      checkboxes.forEach((cb) => {
        const index = parseInt(cb.dataset.index);
        const produk = keranjang[index];
        totalQty += produk.jumlah;
        totalHargaAll += produk.jumlah * produk.price;
      });

      totalProduk.innerText = `(${totalQty} Produk)`;
      totalHarga.innerText = `$${totalHargaAll.toLocaleString("en-US")}`;

      if (checkboxes.length > 0) {
        check.classList.remove("hidden");
      } else {
        check.classList.add("hidden");
      }
    }

    checkboxPilihSemua.addEventListener("change", () => {
      const semuaCheckbox = document.querySelectorAll(".checkboxProduk");
      semuaCheckbox.forEach((cb) => {
        cb.checked = checkboxPilihSemua.checked;
      });
      updateTotalTercentang();
    });

    document.getElementById("checkButton").addEventListener("click", () => {
      const checkboxTercentang = document.querySelectorAll(".checkboxProduk:checked");
      if (checkboxTercentang.length === 0) {
        alert("Pilih produk terlebih dahulu untuk checkout.");
        return;
      }

      const produkTerpilih = [];
      const indexTerhapus = [];

      checkboxTercentang.forEach((cb) => {
        const index = parseInt(cb.dataset.index);
        produkTerpilih.push(keranjang[index]);
        indexTerhapus.push(index);
      });

      indexTerhapus.sort((a, b) => b - a).forEach((index) => {
        keranjang.splice(index, 1);
      });

      localStorage.setItem("beliSekarang", JSON.stringify(produkTerpilih[0]));
      localStorage.setItem("keranjang", JSON.stringify(keranjang));

      navigate("/checkout/" + produkTerpilih[0].id);
    });

    renderKeranjang();
  }, [navigate]);

  return (
    <>
      <div>
        <section>
          <div className="bg-white w-full shadow-md">
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex flex-row items-center justify-between p-4">
                <div className="p-4 h-16 flex flex-row items-center gap-12">
                  <h1 className="font-bold text-lg text-gray-600">Pilih</h1>
                  <h1 className="font-bold text-lg text-gray-600">Produk</h1>
                </div>
                <div className="flex flex-row items-center gap-2 p-4 px-5 space-x-32">
                  <h1 className="font-bold text-lg text-gray-600">Harga Satuan</h1>
                  <h1 className="font-bold text-lg text-gray-600">Kuantitas</h1>
                  <h1 className="font-bold text-lg text-gray-600">Total Harga</h1>
                  <h1 className="font-bold text-lg text-gray-600">Aksi</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="pesan-kosong" className="text-center text-gray-500 mt-52 hidden">
          Kamu belum memasukkan produk ke keranjang.
        </div>
        <div className="bg-white w-full shadow-md">
          <div className="w-full max-w-7xl mx-auto">
            <div id="KeranjangProduk" className="divide-y divide-gray-100"></div>
          </div>
        </div>
        <section>
          <div id="bagianCheck" className="bg-white w-full mt-4 shadow-md hidden">
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex flex-row items-center justify-between p-4">
                <div className="p-4 h-16 flex flex-row items-center gap-12">
                  <input id="pilihSemua" type="checkbox" className="h-6 w-6" />
                  <h1 className="font-bold text-lg text-gray-600">Pilih Semua</h1>
                </div>
                <div className="flex flex-row items-center gap-2 px-5">
                  <h1 className="font-bold text-lg text-gray-600">Total Produk</h1>
                  <h1 id="jumlahTotalProduk" className="font-bold text-lg text-gray-600">(0 Produk)</h1>
                  <h1 id="jumlahHargatotal" className="font-bold text-lg text-[var(--primary-color)]">Rp0</h1>
                  <button onClick={()=>{
                    localStorage.setItem('produkBeli', JSON.stringify(produkTerpilih))
                    navigate('/checkout')
                  }} id="checkButton" className="beliSekarang h-10 w-40 p-1 border border-[var(--primary-color)] text-[var(--primary-color)] font-bold rounded-md text-sm hover:bg-[var(--primary-color)] hover:text-white transition">
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export { Maincart };
