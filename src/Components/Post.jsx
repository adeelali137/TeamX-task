import React from "react";
import { useEffect, useState } from "react";

export default function Post() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="App">
        <h3 className="mb-3 text-2xl font-bold">Posts</h3>
        {users.map((user) => (
          <div className="div-center-post" key={user.id}>
            <a
              href="#"
              className="block p-6 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {user.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {user.body}
              </p>
            </a>{" "}
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
