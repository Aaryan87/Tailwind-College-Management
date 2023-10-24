import { useState } from 'react';
import google from '../assets/google.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const clickhandler = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');
    setEmail('');
    setPwd('');

    // Continue with your login logic
  };

  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col prose text-[#f5f5f5] z-10'>
          <h1 className='text-5xl text-white font-extrabold my-4 font-poppins'>Turn Your Ideas into Reality</h1>
          <p className='text-xl text-white font-normal font-poppins'>
            Start for free and get attractive offers from the community
          </p>
        </div>
        <img
          src="/images/vasily-koloda-8CqDvPuo_kI-unsplash.jpg"
          className='w-full h-full object-cover brightness-75'
        />
      </div>

      <div className='w-1/2 h-full bg-gray-800 flex flex-col p-20 justify-between items-center'>
        <h1 className='w-full max-w-[500px] mx-auto text-xl text-[#f5f5f5] font-semibold mr-auto'>
          Interactive Brand
        </h1>

        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-2 text-white'>
            <h3 className='text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-base mb-2 font-poppins'>Welcome Back! Please enter your details.</p>
          </div>

          <div className='w-full flex flex-col'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email Address'
              className='w-full text-[#f5f5f5] py-2 my-2 bg-transparent border-b border-[#f5f5f5] outline-none focus:outline-none'
            />

            {emailError && <p className='text-red-600'>{emailError}</p>}

            <input
              type='password'
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder='Password'
              className='w-full text-[#f5f5f5] py-2 my-2 bg-transparent border-b border-[#f5f5f5] outline-none focus:outline-none'
            />
          </div>

          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center'>
              <input type='checkbox' className='w-4 h-4 mr-2' />
              <p className='text-sm text-[#f5f5f5]'>Remember Me</p>
            </div>
            <a className='text-sm font-medium whitespace-nowrap cursor-pointer text-[#f5f5f5] underline underline-offset-2'>
              Forgot Password ?
            </a>
          </div>

          <div className='w-full flex flex-col my-4'>
            <button
              className='w-full text-[#f5f5f5] my-2 font-semibold bg-purple-500 hover:bg-purple-700 ease-in-out duration-500 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'
              onClick={clickhandler}
            >
              Login
            </button>
            {/* <button className='w-full text-[#060606] my-2 font-semibold bg-white border border-[#f5f5f5] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                        Register
                    </button> */}
          </div>

          <div className='w-full flex items-center justify-center relative py-2'>
            <div className='w-full h-[1px] bg-[#f5f5f5]'></div>
            <p className='text-lg absolute text-[#f5f5f5] bg-gray-800 px-2'>or</p>
          </div>

          <div className='w-full text-[#f5f5f5] my-2 font-semibold bg-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            <img src={google} className='h-6 mr-2' />
            Sign In with Google
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#f5f5f5]'>
            Don&apos;t Have an Account?{' '}
            <Link to='/register'>
              <span className='font-semibold underline underline-offset-2 cursor-pointer '>Sign up for free</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
