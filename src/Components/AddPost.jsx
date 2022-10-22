import React, {useState, useEffect} from "react";


export default function AddPost() {
  const [initialValues, setinitialValues] = useState({
    title: "",
    descc: "",
    author: "",
  });
  const [formValues, setFormValues] = useState([]);

    const submitForm = (event) => {
      event.preventDefault();
      setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
      alert("Data is saved in local storage please check there.");
    };
  
    useEffect(() => {
      localStorage.setItem("formValues", JSON.stringify(formValues));
    }, [formValues]);


  return (
    <div className="flex justify-center">
      <div className=" p-4 w-full max-w-xl bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        {/* <form className="space-y-6" onSubmit={handleOnSubmit}> */}
        <form className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Create a New Post
          </h5>
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              name="text"
              id="text"
              value={initialValues.title}
              onChange={(e) => setinitialValues({ ...initialValues, title: e.target.value })}
              // onChange={handleChangeTitle}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Post Title..."
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <textarea
              type="text"
              name="text"
              id="text"
              value={initialValues.descc}
              onChange={(e) => setinitialValues({ ...initialValues, descc: e.target.value })}
              // onChange={handleChangeDesc}
              placeholder="Post Description..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Created By
            </label>
            <input
              type="text"
              name="text"
              id="text"
              value={initialValues.author}
              onChange={(e) => setinitialValues({ ...initialValues, author: e.target.value })}
              // onChange={handleChangeAuthor}
              placeholder="Author Name..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <button
            // type="submit"
            onClick={submitForm}
            // onSubmit={handleOnSubmit}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}
