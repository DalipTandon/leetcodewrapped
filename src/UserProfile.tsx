import  { useEffect, useState } from "react";
import { BackgroundLines } from "./components/ui/background-lines";
import axios from "axios";
import html2canvas from "html2canvas";
import Chart from "./Chart";
import Content from "./Content";
import { Link, useLocation } from "react-router-dom";

interface UserStats {
  totalProblemsSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  contributionPoints: number;
  acceptanceRate: number;
  totalSubmissions: number;
}

export default function UserProfile() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const leetcodeId = queryParams.get("leetcodeId") || ""; 
  const [userData, setUserData] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  const userInfo = async (leetcodeId: string) => {
    try {
      const res = await axios.get(`https://leetcode-stats-api.herokuapp.com/${leetcodeId}`);
      setUserData(res.data); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    if (leetcodeId) {
      userInfo(leetcodeId);
    }
  }, [leetcodeId]);

  const downloadContent = () => {
    const contentElement = document.getElementById("user-profile-content");

    if (contentElement) {
      html2canvas(contentElement)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = imgData;
          link.download = `${leetcodeId}-wrapped-2024.png`; 
          link.click();
        })
        .catch((err) => {
          console.error("Error generating image:", err);
        });
    }
  };

  if (loading) {
    return (
      <div className="bg-black h-screen text-white text-3xl flex justify-center items-center">
        Data is being fetched... <span className="ml-2">Please wait</span>
      </div>
    );
  }

  return (
    <BackgroundLines className="flex items-center w-full flex-col bg-black">
      <div id="user-profile-content" className="bg-[#000000f6] h-5/6 w-3/6 mt-5 p-6 relative">
        <h5 className="text-white text-center text-2xl">{leetcodeId}</h5>
        <p className="text-blue-500 text-center">Leetcode Wrapped 2024</p>
        <div>
          <Chart userData={userData} />
        </div>
        <div>
          <Content data={userData} />
        </div>
      </div>
      <div className="h-fit w-3/6 p-2 flex justify-center absolute bottom-10">
        <button
          onClick={downloadContent}
          className="border border-white text-white p-2 w-40 font-bold text-xl rounded-lg hover:bg-blue-500 hover:scale-105 transition"
        >
          Download
        </button>
        <Link to="/">
          <button className="mx-5 border border-white text-white bg-gradient-to-r from-blue-500 to-purple-600 p-2 w-52 font-bold text-md whitespace-nowrap rounded-lg hover:from-blue-600 hover:to-purple-700 transition">
            Generate Your Wrapped
          </button>
        </Link>
      </div>
    </BackgroundLines>
  );
}
