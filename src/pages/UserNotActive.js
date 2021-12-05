import React from 'react';

import Header from '../partials/Header';

function UserNotActive() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <span className="h1 mb-4">User not active</span>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default UserNotActive;