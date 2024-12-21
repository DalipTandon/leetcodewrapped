import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card(){
  const [leetcodeId, setLeetcodeId] = useState(""); 
  return (
    <div className="absolute h-96 w-96  ">
      <div className="max-w-lg mx-auto p-6 bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-lg border border-gray-700 ">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text mb-2">Leetcode Wrapped</h1>
        <h4 className="text-gray-400 text-xl mb-4">
          Discover your coding journey in 2024
        </h4>
      
        <input
          type="text"
          placeholder="Enter your Leetcode Username"
          value={leetcodeId}
          onChange={(e) => setLeetcodeId(e.target.value)}
          className="w-full px-3 py-2 border rounded-md text-white bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <Link to={`/result?leetcodeId=${leetcodeId}`} >
        <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition">
          Generate my wrapped
        </button>
        </Link>
      </div>
      <div className="font-bold text-center my-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-md">
        Built with ❤️ by Dalip Tandon
      </div>
    </div>
  );
};

