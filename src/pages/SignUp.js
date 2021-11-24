import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registerUser, useAuthDispatch, useAuthState } from '../context';

import Header from '../partials/Header';

function SignUp() {

  const dispatch = useAuthDispatch();
	const { loading } = useAuthState();

  const history = useHistory();
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

	const handleSignUp = async (e) => {
		e.preventDefault();

    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm-password");

    if(password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords Don't Match");
      return;
    }

		try {
			let response = await registerUser(dispatch, { email, password });
			if (!response.user) return;
			history.push('/cameras');
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSignUp}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your name"
                        required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="phone">Phone <span className="text-red-600">*</span></label>
                      <input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={loading}
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your phone number"
                        required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your password"
                        required />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Confirm Password <span className="text-red-600">*</span></label>
                      <input
                        id="confirm-password"
                        type="password"
                        disabled={loading}
                        className="form-input w-full text-gray-800"
                        placeholder="Confirm your password"
                        required />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                        Sign up
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
                  </div>
                </form>
                <div className="text-gray-600 text-center mt-6">
                  Already a user? <Link to="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;