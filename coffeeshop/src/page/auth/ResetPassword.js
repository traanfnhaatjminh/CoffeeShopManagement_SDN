import React from 'react';
import HeaderAuthentication from '@/components/authentication/HeaderAuthentication';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import resetPassword from '@/assets/images/resetPassword.webp';
import { FaUser } from 'react-icons/fa6';
import { FaUserGroup } from 'react-icons/fa6';

const ResetPassword = () => {
  return (
    <>
      <HeaderAuthentication></HeaderAuthentication>
      <div className="container font-mono flex">
        <div className="content-right w-7/12">
          <img src={resetPassword} alt="Img login" className="w-7/12 ml-40" />
        </div>
        <div className="content-left w-5/12 pl-14 mt-10">
          <Link className="btn-back flex items-center w-3/12" to="../../login">
            <IoIosArrowBack />
            <p className="ml-2 font-bold">Back to login</p>
          </Link>
          <h1 className="title-page font-semibold text-4xl mt-10 hover:text-amber-600">Set a password</h1>
          <p className="mt-5 text-base w-11/12">
            Your previous password has been reseted. Please set a new password for your account.
          </p>
          <div className="reset-password w-4/5 mt-5">
            <label htmlFor="password">Create password</label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaUser className="w-4 h-4 text-slate-400 dark:text-yellow-800" fill="currentColor" />
              </div>
              <input
                type="password"
                id="password"
                className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              ></input>
            </div>
          </div>
          <div className="re-enter-password w-4/5">
            <label htmlFor="re-enter">Re-enter password</label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaUserGroup className="w-4 h-4 text-slate-400 dark:text-yellow-800" fill="currentColor" />
              </div>
              <input
                type="password"
                id="re-enter"
                className="border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              ></input>
            </div>
          </div>
          <p>
            Didn’t receive a code? <Link className="text-cyan-500">Resend</Link>
          </p>
          <button
            type="button"
            className="w-4/5 mt-3 focus:outline-none text-white bg-teal-500 hover:bg-teal-300 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-teal-600 dark:hover:bg-teal-500 dark:focus:ring-teal-200"
          >
            Set Password
          </button>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
