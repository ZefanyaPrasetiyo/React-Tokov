import React, { useEffect, useRef, useState } from "react";

const Profilemain = () => {
  const [profile, setProfile] = useState({});
  const [form, setForm] = useState({
    username: "",
    nama: "",
    email: "",
    password: "",
    telepon: "",
    alamat: "",
  });
  const [foto, setFoto] = useState("../image/Group 93.png");

  const fileInputRef = useRef();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
     if (!userData) {
      alert("Silakan login terlebih dahulu.");
      window.location.href = "/";
    }
    if (userData) {
      setProfile(userData);
      setForm({
        username: userData.username || "",
        nama: userData.nama || "",
        email: userData.email || "",
        password: userData.password || "",
        telepon: userData.telepon || "",
        alamat: userData.alamat || "",
      });
      setFoto(userData.foto || "../image/Group 93.png");
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdate = () => {
    const updated = { ...form, foto };
    setProfile(updated);
    localStorage.setItem("userProfile", JSON.stringify(updated));
    alert("Perubahan profil berhasil disimpan!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        alert("Ukuran gambar maksimal 1 MB!");
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        setFoto(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 font-sans">
      <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24">
          <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" />
        </svg>
        <div>
          <h1 className="text-2xl font-bold text-Primary">Profil Saya</h1>
          <p className="text-sm text-gray-600">Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row justify-between gap-10">
        {/* Form Data */}
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            <label htmlFor="profileUsername">Username</label>
            <input id="username" value={form.username} onChange={handleChange} className="border p-2 rounded w-full" type="text" />
            <p className="text-sm text-gray-500">Username hanya dapat diubah satu kali</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="profileNama">Nama</label>
            <input id="nama" value={form.nama} onChange={handleChange} className="border p-2 rounded w-full" type="text" />
          </div>

          <div className="space-y-2">
            <label htmlFor="profileEmail">Email</label>
            <p className="text-sm">{form.email}</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="profileSandi">Sandi</label>
            <p className="text-sm">{form.password}</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="tambahNotelp">Nomor Telepon</label>
            <input id="telepon" value={form.telepon} onChange={handleChange} className="border p-2 rounded w-full" type="tel" />
          </div>

          <div className="space-y-2">
            <label htmlFor="tambahAlamat">Alamat</label>
            <input id="alamat" value={form.alamat} onChange={handleChange} className="border p-2 rounded w-full" type="text" />
          </div>

          <button onClick={handleUpdate} className="w-full border mt-4 py-2 rounded text-Primary border-Primary font-bold hover:bg-Primary hover:text-white transition">Simpan perubahan</button>
        </div>

        {/* Foto */}
        <div className="flex flex-col items-center gap-4 w-full lg:max-w-sm">
          <img src={foto} alt="Foto Profil" className="w-36 h-36 rounded-full object-cover border" />
          <input
            ref={fileInputRef}
            onChange={handleImageChange}
            type="file"
            accept="image/*"
            className="hidden"
          />
          <button onClick={() => fileInputRef.current.click()} className="border px-4 py-2 rounded">Pilih Gambar</button>
          <p className="text-sm text-center text-gray-500">
            Ukuran gambar maks. 1 MB <br /> Format .JPEG, .PNG
          </p>

          <button onClick={handleLogout} className="text-red-600 mt-6 flex items-center gap-2 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path fill="currentColor" d="M1.3 3.75h5.88V2.5H1.3A1.25 1.25 0 0 0 .05 3.75v8.5A1.25 1.25 0 0 0 1.3 13.5h5.88v-1.25H1.3z" />
              <path fill="currentColor" d="m15.4 7l-4-2.74l-.71 1l3.08 2.1H4.71v1.26h9.07l-3.08 2.11l.71 1L15.4 9a1.24 1.24 0 0 0 0-2" />
            </svg>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export { Profilemain };
