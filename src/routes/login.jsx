import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [state, setState] = useState({});
    const navigate = useNavigate();

    const handleInput = function({ target }) {
        const {name, value} = target
        setState({
            ...state,
            [name]: value
        })        
    }

    const handleSubmit = function() {
        const {email, password} = state;
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        fetch(`${API_DOMAIN}/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accepts": "application/json",
            },
            body: new URLSearchParams(formData)
        })
        .then((response) => {
            // wait for promise to resolve
            if (response.status === 201) {
                navigate("/docket");
            }
            // error message is text (currently)
            return response.text()
        })
        .then((result) => {
          // Do things with result
          console.log(result);
        })
        .catch(error => {
            console.log("error:", error);
            
        });
    }

    return (
        <form>
            <div>
                <label htmlFor="email">Enter your email:</label>
                <input type="text" name="email" id="email" onChange={handleInput} required />
            </div>
            <div>
                <label htmlFor="password">Enter your password:</label>
                <input type="password" name="password" id="password" onChange={handleInput} required />
            </div>
            <div>
                <input type="button" value="Submit" onClick={handleSubmit}/>
            </div>
        </form>
    )
}