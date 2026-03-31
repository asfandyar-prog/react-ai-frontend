import { useState } from "react";

const array=["ONE","TWO","THREE"];
const [first,second,third] = array;
console.log(first,second,third);
console.log(second);

const App=()=>{
  const [val, setval] = useState("alvin was here!");

  return (<div className={`flex flex-col items-center justify-center border-3 h-screen`}>
        <div  className="text-3xl text-stone-400">{val}</div>
        <div className="mt-4">
          <button className="m-2 px-4 text-white bg-green-400 rounded-md"
          onClick={()=>{
            console.log("button clicked");
            setval("i am fucked up");

          }}
          >ONE</button>

          <button className="m-2 px-4 text-white bg-red-400 rounded-md"
          onClick={()=>{
            setval("your are fucked upo") 
          }}
          >TWO</button>
          <button className="m-2 px-4 text-white bg-pink-400 rounded-md"
          onClick={()=>{
            setval("i am fucked up")
          }}
            >THREE</button>
        </div>
  </div>);

};

export default App;


















