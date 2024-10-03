import React from 'react';
import HeaderAuthentication from '@/components/authentication/HeaderAuthentication';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import verifyPassword from '@/assets/images/verifyPassword.webp';
import { RiQrScan2Line } from 'react-icons/ri';

const VerifyPassword = () => {
  const navigate = useNavigate();
  const handleVerify = () => {
    navigate('/login/reset-password');
  };
  return (
    <>
      <HeaderAuthentication></HeaderAuthentication>
      <div className="container font-mono flex">
        <div className="content-right w-7/12">
          <img src={verifyPassword} alt="Img login" className="w-9/12 ml-40" />
        </div>
        <div className="content-left w-5/12 pl-14 mt-10">
          <Link className="btn-back flex items-center w-3/12" to="../../login">
            <IoIosArrowBack />
            <p className="ml-2 font-bold">Back to login</p>
          </Link>
          <h1 className="title-page font-semibold text-4xl mt-10 hover:text-amber-600">Verify code</h1>
          <p className="mt-5 text-base w-11/12">An authentication code has been sent to your email.</p>
          <div className="email-login w-4/5 mt-8">
            <label htmlFor="email">Enter Code</label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <RiQrScan2Line className="w-4 h-4 text-slate-400 dark:text-orange-300" fill="currentColor" />
              </div>
              <input
                type="email"
                id="email"
                className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder=""
              ></input>
            </div>
          </div>
          <p>
            Didn’t receive a code? <Link className="text-cyan-500">Resend</Link>
          </p>
          <button
            type="button"
            className="w-4/5 mt-3 focus:outline-none text-white bg-teal-500 hover:bg-teal-300 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-teal-600 dark:hover:bg-teal-500 dark:focus:ring-teal-200"
            onClick={handleVerify}
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
};
export default VerifyPassword;
