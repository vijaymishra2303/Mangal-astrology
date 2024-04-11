import ConsultCard from "./ConsultCard"
import EnquiryForm from "./EnquiryForm"
import RashiRatn from "./RashiRatn"

function Home(){
    return(
        <div>
     <div className="container">
        <div className="row">
        <div className="col-md-6">
        <div className="cardAstro">
  <h1>
    Welcome To
    <span> Siddh Astrology </span>{" "}
  </h1>
  <p>
    {" "}
    ज्योतिष ऐसा विज्ञान या शास्त्र है जो आकाश मंडल में विचरने वाले ग्रहों जैसे
    सूर्य, चन्द्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु, के साथ राशियों
  </p>
  
  <div className="numCard">
    <figure>
      <img src="assets/images/icons/call.svg" alt="" />
    </figure>
    <h6>+91 9827878782</h6>
  </div>
</div>

        </div>
        <div className="col-md-6">
      
<EnquiryForm></EnquiryForm>
        </div>
        </div>

     </div>

<ConsultCard></ConsultCard>
<RashiRatn></RashiRatn>
        </div>
    )
}
export default Home