import amazonLogo from '/amazon.svg'
import zerpmonLogo from '/zerpmon.svg'
import rcadiaLogo from '/rcadialogo.svg'
import futurepassLogo from '/futureverse.svg'
import './App.css'


function App() {
  

  return (
    <>
      <div>
        <a href="https://rcadia.xyz" target="_blank">
          <img src={rcadiaLogo} className="logo" alt="rcadia logo" />
        </a>
       
      </div>
      <h1>Rcade Portal</h1>
      <div className="card">
      <a href="https://app.zerpmon.world/en" target="_blank">
          <img src={zerpmonLogo} className="logo" alt="rcadia logo" />
        </a>

        <a href="https://www.futureverse.com" target="_blank">
          <img src={futurepassLogo} className="logo" alt="rcadia logo" />
        </a> 

        <a href="https://www.primevideo.com/" target="_blank">
          <img src={amazonLogo} className="logo" alt="rcadia logo" />
        </a>   
      
      </div>
      <p className="read-the-docs">
        Powered By Electron-Vite & Futureverse / Version 0.0.1
      </p>
      <p className="read-the-docs">
      © 2024 Rcadia. All Rights Reserved
      </p>
    </>
  )
}

export default App
