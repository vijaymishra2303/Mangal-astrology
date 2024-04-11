import { useEffect, useState } from "react"

function ConsultCard(){
const [data ,setData]=useState([])
useEffect(()=>{
    fetch("https://astrology-b6ak.onrender.com/product").then((resp)=>{
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
      <img src={item.pimage}  />
    </figure>
  </div>
  <h4>{item.pname}</h4>
  <p>{item.pdesc}</p>
  
</div>
</div>

            )}
        </div>
        </div>
    )
}
export default ConsultCard