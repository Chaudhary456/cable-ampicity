import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formation, setformation] = useState("");
  const [separation, setseparation] = useState("");
  const [result, setresult] = useState("");

  const data=[
    {
      _id: {
        $oid: "646c5536efa874cf3d853a5c"
      },
      Separation: "3D",
      formation: "Axial",
      CablePhase: "ABC",
      CableFrequency: "50.0 Hertz",
      DailyLoadFactor: "1.0",
      ConductorTemperatureOf1stConductor: "88.5",
      ConductorTemperatureOf2ndConductor: "90.0",
      ConductorTemperatureOf3rdConductor: "88.5",
      AmpacityOf1stConductor: "368.5 Amp",
      AmpacityOf2ndConductor: "368.5 Amp",
      AmpacityOf3rdConductor: "368.5 Amp"
    },
    {
      _id: {
        $oid: "646e37f823d107688ec441ee"
      },
      Separation: "2D",
      formation: "Axial",
      CablePhase: "ABC",
      CableFrequency: "50.0 Hertz",
      DailyLoadFactor: "1.0",
      ConductorTemperatureOf1stConductor: "87.6",
      ConductorTemperatureOf2ndConductor: "90.0",
      ConductorTemperatureOf3rdConductor: "87.6",
      AmpacityOf1stConductor: "354 Amp",
      AmpacityOf2ndConductor: "354 Amp",
      AmpacityOf3rdConductor: "354 Amp"
    },
    {
      _id: {
        $oid: "646e3b3223d107688ec441ef"
      },
      Separation: "D",
      formation: "Axial",
      CablePhase: "ABC",
      CableFrequency: "50.0 Hertz",
      DailyLoadFactor: "1.0",
      ConductorTemperatureOf1stConductor: "86.3",
      ConductorTemperatureOf2ndConductor: "90.0",
      ConductorTemperatureOf3rdConductor: "86.2",
      AmpacityOf1stConductor: "320 Amp",
      AmpacityOf2ndConductor: "320 Amp",
      AmpacityOf3rdConductor: "320 Amp"
    },
    {
      _id: {
        $oid: "646e3e0923d107688ec441f1"
      },
      Separation: "D",
      formation: "Trefoil",
      CablePhase: "ABC",
      CableFrequency: "50.0 Hertz",
      DailyLoadFactor: "1.0",
      ConductorTemperatureOf1stConductor: "84.7",
      ConductorTemperatureOf2ndConductor: "90.0",
      ConductorTemperatureOf3rdConductor: "90.0",
      AmpacityOf1stConductor: "275 Amp",
      AmpacityOf2ndConductor: "275 Amp",
      AmpacityOf3rdConductor: "275 Amp"
    },
    {
      _id: {
        $oid: "646e3f2b23d107688ec441f2"
      },
      Separation: "3D",
      formation: "Trefoil",
      CablePhase: "ABC",
      CableFrequency: "50.0 Hertz",
      DailyLoadFactor: "1.0",
      ConductorTemperatureOf1stConductor: "71.2",
      ConductorTemperatureOf2ndConductor: "90.0",
      ConductorTemperatureOf3rdConductor: "90.0",
      AmpacityOf1stConductor: "321 Amp",
      AmpacityOf2ndConductor: "321 Amp",
      AmpacityOf3rdConductor: "321 Amp"
    },
    {
      _id: {
        $oid: "646e3f3b23d107688ec441f3"
      },
      Separation: "2D",
      formation: "Trefoil",
      CablePhase: "ABC",
      CableFrequency: "50.0 Hertz",
      DailyLoadFactor: "1.0",
      ConductorTemperatureOf1stConductor: "71.2",
      ConductorTemperatureOf2ndConductor: "90.0",
      ConductorTemperatureOf3rdConductor: "90.0",
      AmpacityOf1stConductor: "309 Amp",
      AmpacityOf2ndConductor: "309 Amp",
      AmpacityOf3rdConductor: "309 Amp"
    }
  ]
  // console.log(separation,formation)
  
  const handleSubmit = (e)=>{
    e.preventDefault() //to prevent page refresh
    data.map((item)=>{
       if(item.Separation ===separation && item.formation===formation){
        setresult(item)
       }
    })

    console.log(result)
  }
  return (
    <div className="App">
      <h1 className='heading'>
        Thermal Analysis of Underground Cables
      </h1>
      <div className="upper_form" >
        <h2>Cable's Specifications</h2>
        <form action="submit">
          <div className='form_element'>
            <h3 className='form_heading' >Formation</h3>
            <input className='form_input' onChange={(e)=>setformation(e.target.value)} type="text" value={formation} />
          </div>
          <div className='form_element'>
            <h3 className='form_heading' >Separation</h3>
            <input className='form_input' onChange={(e)=>setseparation(e.target.value)} type="text" value={separation} />
          </div>
          <button className='button' onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
      </div>  
        {result!==""?<div>
          <h2>Analysis</h2>
          <div className="lower_result">
            <div className="element" >
            <p className="key" >Cable Frequency:</p> 
            <p className="value" >{result.CableFrequency}</p>
            </div>
            <div className="element" >
            <p className="key" >Daily Load Factor:</p> 
            <p className="value" >{result.DailyLoadFactor}</p>
            </div>
            <div className='element' >
            <p className='key' >Conductor Temperature Of 1st Conductor:</p> 
            <p className='value' >{result.ConductorTemperatureOf1stConductor}</p>
            </div>
            <div className='element' >
            <p className='key' >Conductor Temperature Of 2nd Conductor:</p> 
            <p className='value' >{result.ConductorTemperatureOf2ndConductor}</p>
            </div>
            <div className='element'>
            <p className='key'>Conductor Temperature Of 3rd Conductor:</p> 
            <p className='value'>{result.ConductorTemperatureOf3rdConductor}</p>
            </div>
            <div className='element'>
            <p className='key'>Ampacity Of 1st Conductor:</p> 
            <p className='value'>{result.AmpacityOf1stConductor}</p>
            </div>
            <div className='element'>
            <p className='key'>Ampacity Of 2nd Conductor:</p> 
            <p className='value'>{result.AmpacityOf2ndConductor}</p>
            </div>
            <div className='element'>
            <p className='key'>Ampacity Of 3rd Conductor:</p> 
            <p className='value'>{result.AmpacityOf3rdConductor}</p>
            </div>
          </div>
        </div>:""}
    </div>
  );
}

export default App;
