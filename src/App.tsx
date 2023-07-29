import { useState } from "react";

type TMode = "pomodoro" | "shortbreak" | "longbreak";

function App() {
  const [mode, setMode] = useState<TMode>("pomodoro");
  return (
    <div className="h-screen w-screen bg-brand-100 p-4 md:p-32 lg:p-40 xl:p-60 pt-24 xl:pt-32 font-poppins">
      <NavBar />
      <div className="left-1/4 top-24 flex w-full rounded-md p-5 text-center bg-opacity-10 bg-brand-200 flex-col h-72">
        <div className="flex gap-3 text-md justify-center text-brand-200 font-medium mb-10 mt-2">
          <button
            className={
              mode === "pomodoro"
                ? "bg-brand-300 bg-opacity-50 pr-1 pl-1 rounded-sm"
                : "pr-1 pl-1 rounded-sm"
            }
            onClick={() => setMode("pomodoro")}
          >
            Pomodoro
          </button>
          <button
            className={
              mode === "shortbreak"
                ? "bg-brand-300 bg-opacity-50 pr-1 pl-1 rounded-sm"
                : "pr-1 pl-1 rounded-sm"
            }
            onClick={() => setMode("shortbreak")}
          >
            Short Break
          </button>
          <button
            className={
              mode === "longbreak"
                ? "bg-brand-300 bg-opacity-50 pr-1 pl-1 rounded-sm"
                : "pr-1 pl-1 rounded-sm"
            }
            onClick={() => setMode("longbreak")}
          >
            Long Break
          </button>
        </div>
        <p className="text-brand-200 font-mono font-black text-8xl w-full mb-5">
          25:00
        </p>
        <button className="mr-20 ml-20 text-brand-100 font-semibold font-mono text-2xl p-3 bg-brand-200 rounded-sm ">
          START
        </button>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute left-0 top-0 w-screen p-3 flex justify-between">
      <div className="border-b border-brand-300 flex justify-between w-full pb-3">
        <div className="flex p-1">
          <div className="p-1 pl-0">
            <img src="../public/icon-white2.png" className="h-5" />
          </div>
          <div className="text-xl font-medium text-brand-200">Pomofocus</div>
        </div>
        <div className="flex text-brand-200 gap-3 text-sm">
          <button className="p-2 bg-brand-200 bg-opacity-10 rounded-md pr-3 pl-3 flex gap-1">
            <img src="../public/graph-white.png" className="h-5" />
            Report
          </button>
          <button className="p-2 bg-brand-200 bg-opacity-10 rounded-md pr-3 pl-3 flex gap-1">
            <img src="../public/config-white.png" className="h-5" />
            Setting
          </button>
          <button className="p-2 bg-brand-200 bg-opacity-10 rounded-md pr-3 pl-3 flex gap-1">
            <img src="../public/user-white.png" className="h-5" />
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
