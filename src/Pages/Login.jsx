import React, {useState} from "react";
import { useNavigate  } from "react-router-dom";


export default function Login() {
  let navigate = useNavigate();
 
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const handleChangeEmail = (event) => {
    setemail(event.target.value)
  }
  const handleChangePass = (event) => {
    setpass(event.target.value)
  }


  const login = (e) => {
    e.preventDefault();
    if (email === "teamx" && pass === "teamx") {
      localStorage.setItem("login", true);
      let path = '/'
      navigate(path);
    }else{
      alert("Please enter valid Email and Pass")
    }
    // localStorage.setItem("login", true);
  };


  return (
    <div className="flex justify-center">
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Login to Access other pages
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your text
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChangeEmail}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="teamx"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChangePass}
              placeholder="teamx"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <button
            onClick={login}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
