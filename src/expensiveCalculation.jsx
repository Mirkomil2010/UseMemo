import React, { useState, useMemo } from "react";

function ExpensiveCalculation() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  function slowFunction(num) {
    console.log("expensive fn is working");
    let result = 0;
    for (let i = 0; i < 1e8; i++) {
      result += num;
    }
    return result;
  }

  const value = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const style = {
    backgroundColor: theme ? "#333" : "#fff",
    color: theme ? "#fff" : "#000",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button className="bg-sky-400 rounded-xl p-1" onClick={() => setTheme((prev) => !prev)}>Temani ozgartirish</button>

      <h3>Hisob natijasi: {value}</h3>
    </div>
  );
}

export default ExpensiveCalculation;
