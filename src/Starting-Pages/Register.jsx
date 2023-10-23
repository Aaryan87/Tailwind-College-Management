import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!termsAccepted) {
      setError('You must accept the terms of use and privacy policy');
      return;
    }

    // Registration logic here

    setError('');
  };

  return (
    <div className="min-h-screen py-40 bg-gradient-to-r from-sky-500 to-indigo-700">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-slate-50 rounded-lg mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-signup-img">
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">Hello Guyzz Welcome here to my sigin page and please register yourself here <a href="#" className="text-purple-500">Learn More</a></p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. Its free and only take a minute
            </p>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="grid gird-cols-2 gap-5">
                <input type="text" placeholder="Firstname" value={name} onChange={e => setName(e.target.value)} className="border border-gray-400 py-1 px-2"/>
                <input type="text" placeholder="Lastname" value={lastName} onChange={e => setLastName(e.target.value)} className="border border-gray-400 py-1 px-2"/>
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border border-gray-400 py-1 w-full"/>
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border border-gray-400 py-1 w-full"/>
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Passowrd" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="border border-gray-400 py-1 w-full"/>
              </div>
              <div className="mt-5">
                <input type="checkbox" checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} className="border-gray-400"/>
                <span>
                  I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                </span>
              </div>
              <div className="mt-5">
                <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
