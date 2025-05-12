import { useState } from "react"

function App() {
  
  const [height ,setHeight] = useState("")
  const [weight ,setweight] = useState("")
  const [bmi , setBmi] = useState(null);
  const [category , setcategory] = useState("")
  const categoryColor = (category) => {
  switch (category) {
    case "Underweight":
      return "orange";
    case "Normal":
      return "green";
    case "Overweight":
      return "goldenrod";
    case "Obese":
      return "red";
    default:
      return "black";
  }
};
  const calculateBMI = () =>{
    if(height && weight){
      const heightInMeters = height / 100;
      const bmi = (weight /(heightInMeters*heightInMeters)).toFixed(2)
      setBmi(bmi);
      const numbericBmi = parseFloat(bmi)
      
      if(numbericBmi <= 18.5){
        setcategory("Underweight")
      }
      else if(numbericBmi >= 18.5 && numbericBmi <= 24.9 ){
        setcategory("Normal")
      }

     else if(numbericBmi >= 25.0 && numbericBmi <= 29.9 ){
        setcategory("Overweight")
      }else{
        setcategory("Obese")
      }

      }
    }
  

  return (
    <>
      <div className="bmi-container">
        <h1>BMI CALCULATOR</h1>
        <div className="input-box">
          <label>Height(cm)</label>
          <input type="number" value={height} placeholder="Enter Your Height" onChange={(e)=> setHeight(e.target.value)}/>
        </div>
        <div className="input-box">
          <label>Weight(kg)</label>
          <input type="number" value={weight} placeholder="Enter Your Weight" onChange={(e)=> setweight(e.target.value)} />
        </div>
        <button onClick={calculateBMI} className="calculate-btn" >Calculate BMI</button>
        {
          bmi && (
            <div className="result">
             <h3 style={{ color: bmi > 25 ? "green" : "rgb(27, 116, 218)" }}>Your BMI: {bmi}</h3>
              <h4 style={{ color: categoryColor(category) }}>Category: {category}</h4>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
