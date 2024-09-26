import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("black");
  const buttons = [
    {color: 'red', background: 'red'},
    {color: 'blue', background: 'blue'},
    {color: 'purple', background: 'purple'},
    {color: 'black', background: 'black'},
  ]
  
  // Map color names to Tailwind classes
  const colorMap = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    black: 'bg-black',
  };
  return (
    <>
      <div className={`w-full h-screen ${colorMap[color]}`} >
        <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
          <div className="flex justify-center gap-3 rounded-xl px-3 py-2 bg-slate-300">
            {
              buttons.map((theme, index) => {
                return(
                  <Button key={index} theme={theme} onClick={()=> {
                    setColor(theme.background)}} />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
