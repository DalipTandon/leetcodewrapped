

const Content=({data})=>{
    const{ranking,totalSolved,totalQuestions,easySolved,totalEasy,mediumSolved,totalMedium,hardSolved,totalHard,contributionPoints}=data;
    
    return(
        <div className="flex flex-wrap  h-72 w-full mt-2  justify-between">
            <div  className="bg-[#251B13] h-20 w-[49%]    rounded-lg p-3 text-black font-extrabold bg-gradient-to-r from-amber-600 to-purple-200 hover:scale-105">👑 Universal Rank <br/> <p className="mx-6 font-bold "> {ranking}</p></div>
            <div className="bg-[#221921] h-20 w-[49%] rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 p-3  font-extrabold hover:scale-105">🪙 Leet Points <br/> <p className="mx-6 font-bold ">{contributionPoints}</p></div>
            <div className="bg-[#251B43] h-20 w-[49%]  rounded-lg bg-gradient-to-r from-emerald-300 to-green-600 p-3 font-extrabold hover:scale-105">✅ total question solved <br/> <p className="mx-6 font-bold ">{`${totalSolved}/${totalQuestions}`}</p></div>
            <div className="bg-[#251B83] h-20 w-[49%] rounded-lg  bg-gradient-to-r from-amber-500 to-orange-600 p-3 font-extrabold hover:scale-105">😁 Easy Question  <br/> <p className="mx-6 font-bold ">{`${easySolved}/${totalEasy}`}</p></div>
            <div className="bg-[#251B43] h-20 w-[49%] rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 p-3 font-extrabold hover:scale-105">💪 Medium Question<br/> <p className="mx-6 font-bold ">{`${mediumSolved}/${totalMedium}`}</p></div>
            <div className="bg-[#251B13] h-20 w-[49%] rounded-lg bg-gradient-to-r from-amber-600 to-purple-200 p-3 font-extrabold hover:scale-105">😎 Hard Question <br/> <p className="mx-6 font-bold ">{`${hardSolved}/${totalHard}`}</p></div>
        </div>
    )
}

export default Content;