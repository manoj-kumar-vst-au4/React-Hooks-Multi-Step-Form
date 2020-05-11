import React from 'react'
import { Link} from "react-router-dom";

export default function form2(props) {
    return (
        <form>
            <h3 className="text-center">STEP-2</h3>
            <div className="d-flex justify-content-center mt-5">
                <div className="d-flex flex-column border border-dark py-5 px-4 shadow" style={{"borderRadius":"20px"}}>
                    <input type="email" placeholder="Email " name="email" value={props.email} className="form-control mb-3" onChange={props.handleChange} />
                    <input type="number" placeholder="Age" name="age" value={props.age} className="form-control mb-3" onChange={props.handleChange}/>
                    <div>
                        <Link to="/form1"><button className="float-left btn btn-dark">Previous</button></Link>
                        {props.age ==="" || props.email ===""? <button className="float-right btn btn-dark" disabled>Next</button> : <Link to="/form3"><button className="float-right btn btn-dark">Next</button></Link> }
                    </div>
                </div>
            </div>
        </form>
    )
}
