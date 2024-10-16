import {Header} from "./components/layout/Header";
import {Main} from "./components/layout/Main";
import {Footer} from "./components/layout/Footer";

import './App.css';

function App() {
  return (
      <div
          className="absolute flex flex-col gap-4 sm:justify-center w-screen min-h-full sm:h-screen py-4 box-border text-slate-200 bg-slate-500 sm:overflow-hidden">
          <Header/>
          <Main/>
          <div className="hidden sm:block">
              <Footer/>
          </div>
      </div>
  );
}

export default App;
