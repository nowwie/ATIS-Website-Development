import Head from 'next/head';
import Image from 'next/image';
import { FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

export default function Home() {
  return (
    <div className="flex flex col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl relative">
          <div className="w-2/5 bg-blue-800 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Capt!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">Seperti Jogja, ATIS membawa informasi cuaca dengan istimewa.</p>
            <a href="/login" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-800">Sign In</a>
          </div> {/* Moved Sign Up Section */}
          <div className="w-3/5 p-5">
            <div className="py-10">
              {/* Sign In Section */}
              <h2 className="text-3xl font-bold text-blue-800 mb-2">Sign up to Account</h2>
              <div className="border-2 w-10 border-blue-800 inline-block mb-2"></div>
              <div className="flex flex-col items-center my-2">
                <button className="border-2border-gray-500 rouneddn-full px-6p-2 mx-1">
                    <span className=" flex items-center">
                        <FaGoogle className="text-sm"/>
                        <span className="ml-2">Sign up with Google</span>
                    </span>
                </button>
                <div>
                    <p className="text-gray-400 my-3">or use your email</p>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <FaRegEnvelope className="text-gray-400"/>
                            <span className="ml-3">
                                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                            </span>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <MdLockOutline className="txt-gray-400"/>
                            <span className="ml-3">
                                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                            </span>
                        </div>
                        <div className="flex justify-between w-64 mb-5">
                            <a href="#" className="text-xs">Forgot Password?</a>
                        </div>
                        <a href="#" className="border-2 border-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-800 hover:text-white">Sign Up</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/logo_airnav.png" 
            alt="AirNav Logo" 
            width={150} 
            height={50}
            className="absolute top-2 left-2" // Mengubah posisi gambar logo ke kiri atas
          />
        </div>
      </main>
    </div>
  );
}
