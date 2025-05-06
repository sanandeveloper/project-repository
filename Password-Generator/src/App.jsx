import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState("");
  const [char, setChar] = useState("");
  const [passwrod, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSUVWXYZabcdefghijklmnopqrstuvxyz";

    if (number) {
      str += "0123456789";
    }
    if (char) {
      str += "[#@`";
    }

    for (let i = 0; i < length; i++) {
      let MyChar = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(MyChar);
      setPassword(pass);
    }
  }, [length, number, char]);

  useEffect(() => {
    passwordGenerator();
  }, [length, char, number, passwordGenerator,]);

  const passWordREf=useRef(null)

  const Selectpassword=useCallback(()=>{
    passWordREf.current?.select()
    
    passWordREf.current?.setSelectionRange(0,5)

    window.navigator.clipboard.writeText(passwrod)
  },[passwrod])
  

  return (
    <div style={{backgroundColor:'blue', width:'500px',padding:'15px',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

      <div style={{}}>
      <h1
        style={{
          textAlign: "center",
          margin: "20px",
          marginTop: "40px",
          color: "white",
        }}
      >
        Password Generator
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            padding: "5px",
            width: "250px",
          }}
          type="text"
          value={passwrod}
          placeholder="Enter Password"
          readOnly
          ref={passWordREf}
        />
        <button onClick={Selectpassword}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px",
          }}
        >
          Copy
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          gap: "20px",
          backgroundColor:''
        }}
      >
        <div style={{display:'flex', gap:'5px'}}>
          <input
            type="range"
            value={length}
            min={8}
            max={100}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label
            htmlFor=""
            style={{
              color: "white",
            }}
          >
            Length:{length}
          </label>
        </div>

        <div>
          <label htmlFor="" style={{ color: "white" }}>
            Number
          </label>
          <input
            type="checkbox"
            defaultChecked={number}
            onChange={() => setNumber((prev) => !prev)}
          />
        </div>

        <div>
          <label htmlFor="" style={{ color: "white" }}>
            Char
          </label>
          <input
            type="checkbox"
            defaultChecked={char}
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
