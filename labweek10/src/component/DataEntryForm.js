import React, {Component} from "react";
import "./DataEntryForm.css";

export default class DataEntryForm extends Component{
    constructor(props){
        super(props);
        this.provices = ['Choose...','Alberta','British Columbia','Manitoba', 'New Brunswick',
        'Newfoundland and Labrador','Nova Scotia','Ontario','Prince Edward Island','Quebec','Saskatchewan','Northwest Territories','Nunavut','Yukon']
        this.state = {
            email: "",
            name: "",
            address: "",
            address2: "",
            city: "",
            provice: "",
            postalCode: "",
            submitted: false
        }
    }

    // Handle the form submission event
    onValueChanged = (event) => {
        event.preventDefault()
        this.setState({
            // ...this.state,
            [event.target.name]: event.target.value 
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.setState({
            submitted: true
        })
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h1>Data Entry Form</h1>
                <div>
                <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <div class="grid-container-double">
                        <div>Email</div>
                        <div>Name</div>
                    </div>
                    <div class="grid-container-double">
                        <div><input 
                        type="text" 
                        name="email" 
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter email" /></div>
                        <div>
                        <input 
                        type="text" 
                        name="name" 
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Full Name"/>
                        </div> 
                    </div>
                    
                    <br/>
                    <div class="grid-container">
                        <div>Adress</div>
                    </div>
                    <div class="grid-container">
                        <input 
                    type="text" 
                    name="address" 
                    onChange={(e) => this.onValueChanged(e)} 
                    placeholder="1234 Main St"/>
                    </div>
                    <br/>
                    <div class="grid-container">
                        <div>Adress 2</div>
                    </div>
                    <div class="grid-container">
                        <input 
                    type="text" 
                    name="address2" 
                    onChange={(e) => this.onValueChanged(e)} 
                    placeholder="Apartment, studio, or floor"/>
                    </div>
                    <br/>
                   <div class="grid-container-triple">
                        <div>City</div>
                        <div>Provice</div>
                        <div>Postal Code</div>
                   </div>
                   <div class="grid-container-triple">
                        <div>
                            <input 
                                type="text" 
                                name="city" 
                                onChange={(e) => this.onValueChanged(e)} />
                        </div>
                        <div>
                            <select name="provice" onChange={(e) => this.onValueChanged(e)}>
                            {
                                this.provices.map((prov) => (
                                <option key={prov} value={prov}>{prov}</option>
                                ))
                            }
                            </select>
                        </div>
                        <div>
                            <input type="text" name="postalCode" onChange={(e) => this.onValueChanged(e)} />
                        </div>
                </div>
                <br/>
                    <input type='checkbox' name='checkbox' value='check'/>Agree Terms & Condition?
                <br/>
                    <button type="submit">Submit</button>
                    
                </form>
                </div>
                <br></br>
                {this.state.submitted && (
                    <div>
                        <table>
                            <tr>
                                <th><h2>Email:</h2></th>
                                <td><h2>{this.state.email}</h2></td>
                            </tr>
                            <tr>
                                <th><h2>Full Name:</h2></th>
                                <td><h2>{this.state.name}</h2></td>
                            </tr>
                            <tr>
                                <th><h2>Address:</h2></th>
                                <td><h2>{this.state.address} {this.state.address2}</h2></td>
                            </tr>
                            <tr>
                                <th><h2>City:</h2></th>
                                <td><h2>{this.state.city}</h2></td>
                            </tr>
                            <tr>
                                <th><h2>Provice:</h2></th>
                                <td><h2>{this.state.provice}</h2></td>
                            </tr>
                            <tr>
                                <th><h2>Postal Code:</h2></th>
                                <td><h2>{this.state.postalCode}</h2></td>
                            </tr>
                        </table>
                    </div>)
                }
            </div>
        );
    }
}