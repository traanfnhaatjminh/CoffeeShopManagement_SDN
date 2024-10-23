import React, { useState } from 'react';
import HeaderAuthentication from '@/components/authentication/HeaderAuthentication';
import logoLoginMain from '@/assets/images/imgLogin.png';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineMail } from 'react-icons/md';
import * as yup from 'yup';
import { FaGoogle, FaUserLock, FaFacebook } from 'react-icons/fa';
import { login } from '@/store/auth-slice/authSlice';

const dataFormLogin = {
  email: '',
  password: '',
};

const AuthLogin = () => {
  const [formData, setFormData] = useState(dataFormLogin);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const validationSchema = yup.object({
    email: yup.string().required('Email is required.').email('Invalid email format.'),
    password: yup
      .string()
      .required('Password is required.')
      .min(8, 'Password must be at lest 8 character!')
      .matches(/[0-9]/, 'Password must container at lest one number.')
      .matches(/[A-Z]/, 'Password must const at lest on uppercase letter.')
      .matches(/[a-z]/, 'Password must const at lest lowercase letter.')
      .matches(/[~!@#$%^&*()_+|}{><}]/, 'Password must const at lest one symbol.'),
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      dispatch(login(formData));
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <HeaderAuthentication position="justify-start container mx-auto " />
      <div className="container px-20 flex font-mono">
        <div className="w-5/12">
          <img src={logoLoginMain} alt="Img login" className="w-11/12 mt-7 ml-16" />
        </div>
        <div className="w-7/12">
          <div className="w-8/12 ml-40">
            <h1 className="header-container-form font-semibold text-5xl mt-5 text-amber-800 hover:text-amber-600">
              Welcome back
            </h1>
            <p className="sub-header mt-3">
              Login to access your <span className="text-[#FF1515]">CaffeShop</span> account
            </p>
            <form onSubmit={handleLogin}>
              <div className="form-login mt-3">
                <div className="email-login">
                  <label htmlFor="email">Your Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <MdOutlineMail
                        className="w-4 h-4 text-gray-500 dark:text-orange-300"
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className=" bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600"
                      placeholder=""
                      value={formData.username}
                      onChange={handleChange}
                    ></input>
                  </div>
                  {errors.email && <div className="text-red-500 mt-1">{errors.email}</div>}
                </div>
                <div className="password-login mt-4">
                  <label htmlFor="password">Password</label>
                  <div className="relative mb-1">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FaUserLock
                        className="w-4 h-4 text-gray-500 dark:text-orange-300"
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600"
                      placeholder=""
                      onChange={handleChange}
                    ></input>
                  </div>
                  {errors.password && <div className="text-red-500">{errors.password}</div>}
                </div>
                <div className="feature-login flex justify-between mt-2">
                  <div className="remember-account flex items-center">
                    <input type="checkbox" id="check-remember" className="h-6" />
                    <label htmlFor="check-remember" className="pl-2">
                      Remember me
                    </label>
                  </div>
                  <Link className="forgot-password text-[#3B82F6]" to="./forgot-password">
                    Forgot password
                  </Link>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full mt-4"
                >
                  Sign in to your account
                </button>
                <p className="register-account text-center font-mono">
                  Don’t have an account?{' '}
                  <a href="https://flowbite.com/docs/components/buttons/" className="text-[#3B82F6]">
                    Sign up
                  </a>
                </p>
                <div className="line-other flex mt-5 items-center ">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="mx-4 text-gray-400">Or login with</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                <div className="register-by-other mt-5 flex">
                  <button
                    type="button"
                    className="justify-center text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 w-6/12 ml-1"
                  >
                    <FaFacebook className="w-4 h-4 me-2" fill="currentColor" />
                    Sign in with Facebook
                  </button>
                  <button
                    type="button"
                    className="justify-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 w-6/12"
                  >
                    <FaGoogle className="w-4 h-4 me-2" />
                    Sign in with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;
