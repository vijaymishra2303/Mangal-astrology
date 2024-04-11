import { useState } from "react";
import axios from "axios";
function EnquiryForm(){
    const [username, setName] = useState("")
    const [unumber, setNumber] = useState("");
    const [umessage ,setMessage]=useState()
  

    const submitForm = (e) => {
        e.preventDefault(); // Prevent default form submission
    
        const url = "https://astrology-b6ak.onrender.com/user";
        const formData = new FormData();
        formData.append("username", username);
        formData.append("umessage", umessage);
        formData.append("unumber", parseInt(unumber));
    
        axios
          .post(url, formData)
          .then((result) => {
            console.log(result.data);
            alert("Success");
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("Failed to submit");
          });
      };
    
    

    return(
        <div>
              <div className="formInquiry">
  <h5>REQUEST A CONSULTING</h5>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In voluptate
    eveniet ut dicta impedit alias quibusdam! Officiis
  </p>
  <div className="formCard">
    <form method="post">
      <div className="form-group">
        <input  type="text" className="form-control" placeholder="Full Name"  required="" onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input type="text"  className="form-control" placeholder="Phone No."  required="" onChange={(e)=>setNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea placeholder="Message" onChange={(e)=>setMessage(e.target.value)} />
      </div>
    </form>
    <button onClick={submitForm} type="submit" name="enquiry" className="btn-started">  Submit</button>
  </div>
</div>
        </div>
    )
}
export default EnquiryForm