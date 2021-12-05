import React from 'react';

import Header from '../partials/Header';

function UserProfile() {

  let user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).user
    : '';

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
              <div className="max-w-3xl mx-auto pb-12 md:pb-20">
                <p className="text-xl text-gray-800">
                 <span className="h4">Name</span>: {user.name}
                </p>

                <p className="text-xl text-gray-800">
                 <span className="h4">Phone</span>: {user.phone}
                </p>

                <p className="text-xl text-gray-800">
                 <span className="h4">Email</span>: {user.email}
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default UserProfile;