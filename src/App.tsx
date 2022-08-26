import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <div className="px-2 md:px-6 my-3 w-full text-slate-700 dark:text-white flex flex-col items-center">
          <div className="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md">
            <div
              className="bg-[url('https://apod.nasa.gov/apod/image/2208/Cartwheel_Webb_960.jpg')] rounded-t-xl w-full h-64 shadow-sm bg-cover"
            ></div>

            <div className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
              <h1 className="text-center p-2 rounded-md text-white">
              
                Space!
              </h1>

              <div className="flex mt-4 font">
                <p className="transition-all duration-100 text-center p-2 rounded-md text-white w-1/3 bg-gradient-to-r from-blue-700 to-blue-500 hover:shadow-md hover:from-blue-800 hover:to-blue-600">
                  View Full-Size
                  <h2 className="text-center text-xs mt-1 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase">
                    Space Article
                  </h2>

                  <span className="self-center text-xs text-blue-700 dark:text-blue-300 -mt-2">
                    24/08/2022
                  </span>
                </p>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
