import { useEffect, useState } from "react"

function RashiRatn(){
const [data ,setData]=useState([])
useEffect(()=>{
    fetch("https://astrology-b6ak.onrender.com/rashi").then((resp)=>{
        resp.json().then((result)=>{
            setData(result)
        })
    })
},[])
    return(
        <div className="container">
        <div className="row">
            {
                data.map((item)=>
                <div className="col-md-4">
                <div className="consultCard" key={item}>
  <div className="imgCar" >
    <figure>
      <img src={item.rimage}  />
    </figure>
  </div>
  <h4>{item.rname}</h4>
  <p>{item.rdesc}</p>
  
</div>
</div>

            )}
        </div>
        </div>
    )
}
export default RashiRatn