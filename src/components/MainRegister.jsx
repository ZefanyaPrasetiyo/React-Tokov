import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from '../assets/image/group 71.png';

const Mainregister = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Validasi form
    if (!nama || !email || !password) {
      alert('Semua field wajib diisi!');
      return;
    }
    // Simpan ke localStorage (simulasi database)
    const newUser = { nama, email, password };
    localStorage.setItem('user', JSON.stringify(newUser));

    alert('Pendaftaran berhasil!');
    navigate('/loginpage');
  };

  return (
    <div className="flex flex-col mt-12 md:flex-row justify-between items-center">
      {/* Kiri */}
      <div className="flex flex-col items-center md:items-start mt-16 md:mt-28 md:ml-36">
        <img src={Logo} alt="Logo TOKOV" className="w-96" />
        <p className="font-sans text-xl text-center md:text-left md:ml-4 mt-4">
          Daftar Akun Baru di TOKOV
        </p>
        <p className="font-sans text-xl md:ml-8 text-center md:text-left">
          Belanja Online, Cepat Terpercaya
        </p>
      </div>

      {/* Kanan */}
      <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-sm flex flex-col mb-12 sm:p-6 md:p-8 mt-10 md:mt-16 md:mr-24 font-sans">
        <form className="space-y-4" onSubmit={handleRegister}>
          <h5 className="text-xl font-medium text-gray-900">Daftar TOKOV</h5>

          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="bg-white border text-sm rounded-lg block w-full p-2.5"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border text-sm rounded-lg block w-full p-2.5"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white border text-sm rounded-lg block w-full p-2.5"
            required
          />

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Daftar
          </button>

          <p className="text-center text-gray-500 py-2">---- Atau -----</p>

          <div className="flex justify-between items-center gap-2">
            <button
              type="button"
              onClick={() => navigate('/Homepage')}
              className="flex border p-2 rounded-md gap-2 items-center w-1/2 justify-center hover:bg-[var(--primary-color)] hover:text-white transition duration-300"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
              <p>Google</p>
            </button>

            <button
              type="button"
              onClick={() => navigate('/Homepage')}
              className="flex border p-2 rounded-md gap-2 items-center w-1/2 justify-center hover:bg-[var(--primary-color)] hover:text-white transition duration-300"
            >
              <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" className="w-4 h-4" />
              <p>Facebook</p>
            </button>
          </div>

          <div className="text-sm font-medium text-gray-500 text-center py-4">
            Sudah punya akun?{" "}
            <Link to="/loginpage" className="text-blue-700 hover:underline">
              Masuk
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};     

export { Mainregister }