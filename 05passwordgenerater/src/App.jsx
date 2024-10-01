import React, { useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenrator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@$%^&*+#";

    for (let index = 1; index <= length; index++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  };

  const copyPass = () => {
    navigator.clipboard.writeText(password)
    alert("Password Copied✅✅")
  }

  useEffect(() => {
    passwordGenrator();
  }, [length, numAllowed, charAllowed]);
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex justify-center items-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Input field for password */}
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="text"
              value={password}
              className="w-full px-4 py-2 text-orange-400 bg-gray-900 border border-gray-600 rounded focus:outline-none"
              readOnly
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
              onClick={copyPass}
            >
              Copy
            </button>
          </div>

          {/* Slider for length */}
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="text-orange-400">Length ({length})</span>
          </div>

          {/* Checkbox for allowing numbers and special characters */}
          <div className="flex items-center space-x-4 text-orange-400">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-500"
                onChange={() => setNumAllowed((prev) => !prev)}
              />
              <span className="ml-2">Numbers</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-500"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <span className="ml-2">Characters</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
