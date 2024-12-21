"use client";
import { useEffect, useState } from "react";

export function Chart({ userData }) {
  const submissionCalendar = userData?.submissionCalendar;

  const [submissionData, setSubmissionData] = useState(submissionCalendar || {});
  const [loading, setLoading] = useState<boolean>(false);
// console.log(submissionCalendar);
// console.log(setSubmissionData);


  useEffect(() => {
    if (submissionCalendar) {
      setLoading(false);
      setSubmissionData(submissionCalendar);
     // console.log("Submission Calendar:", submissionCalendar);  
    }
  }, [submissionCalendar]);

  const getColorClass = (count: number): string => {
  //  console.log("Count:", count);
    if (count === 0) return "bg-gray-200";
    if (count <= 2) return "bg-green-200";
    if (count <= 4) return "bg-green-400";
    if (count <= 6) return "bg-green-600";
    return "bg-green-800";
  };

  const renderHeatmap = () => {
    if (!submissionData || Object.keys(submissionData).length === 0) {
      return <p className="text-gray-500">No data available to display.</p>;
    }

    const days = Object.keys(submissionData);
    return days.map((day) => {
      const timestamp = parseInt(day, 10);
      if (isNaN(timestamp)) {
       // console.error(`Invalid timestamp: ${day}`);
        return null;
      }

      const date = new Date(timestamp * 1000); // Convert to milliseconds
      const count = submissionData[day];

      return (
        <div
          key={day}
          className={`w-2 h-2  ${getColorClass(count)} m-1 `}
          title={`${date.toDateString()}: ${count} submissions`}
        ></div>
      );
    });
  };

  if (loading) {
    return (
      <div className="bg-blue-400 p-4 rounded-lg ">
        <h2 className="text-white font-bold mb-4">Submission Heatmap</h2>
        <p className="text-gray-200">Loading submission data...</p>
      </div>
    );
  }



  return (
    <div className="bg-transparent p-2  rounded-lg h-56 overflow-hidden mb-1">
      <h2 className=" font-bold mb-4 text-white text-4xl">Submission Heatmap</h2>
      <div className="flex flex-wrap">{renderHeatmap()}</div>
    </div>
  );
}

export default Chart;
