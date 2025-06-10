import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image/group 71.png';


const Masuk = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Ambil data user dari localStorage
const storedUser = JSON.parse(localStorage.getItem('user'));

if (!storedUser) {
  alert('Akun belum terdaftar. Silakan daftar terlebih dahulu.');
  return;
}

if (email === storedUser.email && password === storedUser.password) {
  alert('Login berhasil!');
  navigate('/Homepage');
} else {
  alert('Email atau password salah!');
}


  return (
    <div className="flex flex-col mt-12 md:flex-row justify-between items-center">
      {/* Kiri */}
      <div className="flex flex-col items-center md:items-start mt-16 md:mt-28 md:ml-36">
        <img src={Logo} alt="Logo TOKOV" className="w-96" />
        <p className="font-sans text-xl text-center md:text-left md:ml-4 mt-4">
          Selamat Datang di TOKOV
        </p>
        <p className="font-sans text-xl md:ml-8 text-center md:text-left">
          Belanja Online, Cepat Terpercaya
        </p>
      </div>

      {/* Kanan */}
      <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-sm flex flex-col mb-12 sm:p-6 md:p-8 mt-10 md:mt-16 md:mr-24 font-sans">
        <form id="formLogin" className="space-y-4" onSubmit={storedUser}>
          <h5 className="text-xl font-medium text-gray-900">Masuk</h5>

          <input
            type="email"
            name="email"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="No Handphone/Email"
            required
          />
          <input
            type="password"
            name="password"
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-white border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />

          <Link to="/ForgotPassword" className="ml-auto text-sm text-blue-700 hover:underline block text-right">
            Lupa password
          </Link>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Masuk
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
            Baru di TOKOV?{' '}
            <Link to="/Register" className="text-blue-700 hover:underline">
              Daftar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Masuk }
