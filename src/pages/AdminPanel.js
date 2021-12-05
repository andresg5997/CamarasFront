import React, { useEffect, useState } from 'react';

import Header from '../partials/Header';
import { getApiUrl } from '../utils/config';

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
  
    try {
      let response = await fetch(`${getApiUrl()}/usuarios`, requestOptions);
      let data = await response.json();
      setUsers(data);

    } catch (err) {
      console.log(err);
    }
  }

  const handleUserActivation = async (user) => {
    const newUserObject = {
      ...user,
      role: user.role === 3 ? 2 : 3
    }

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
		  body: JSON.stringify(newUserObject),
    };
  
    try {
      await fetch(`${getApiUrl()}/usuarios`, requestOptions);
      fetchUsers();

    } catch (err) {
      console.log(err);
    }
  }

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
                <h1 className="h1 mb-4">User List</h1>
              </div>
              <div className="max-w-md mx-auto">

              <ul>
                {
                  users.map((user, index) => (
                    <li className="bg-white rounded shadow-md m-2 p-3" key={'user-' + index}>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="h4">{user.name}: </span>
                          <span>{user.email} </span>

                        </div>
                        <a href="#!" className="h3" onClick={() => handleUserActivation(user)}>
                          {user.role === 3 ? (
                            <span>Activate</span>
                          ) : (
                            <span>Deactivate</span>
                          )}
                        </a>
                      </div>
                    </li>
                  ))
                }
              </ul>
              
              </div>
          </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default AdminPanel;