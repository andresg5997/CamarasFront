import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../partials/Header';
import { apiUrlList } from '../utils/config';

function Cameras() {
  const history = useHistory();

  let user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).user
    : '';  

  if(user.role === 3) {
    history.push('/user-not-active');
  }

  const numberOfCameras = 8;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                  [...Array(numberOfCameras)].map((_, cameraCount) => (
                    <div className="flex flex-col items-center p-3 m-6 bg-white rounded shadow-md" key={'camera-' + cameraCount}>
                      <h3 className="h3">{cameraCount + 1}</h3>
                      <video id="videoPlayer" muted="muted" autoPlay>
                        <source src={`${apiUrlList.video}/${cameraCount + 1}`} type="video/mp4" />
                      </video>
                    </div>
                  ))
                }

              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default Cameras;