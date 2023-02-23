import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
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
        const {firstName, lastName, email, password} = state;
        const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("password", password);
        fetch(`${API_DOMAIN}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accepts": "application/json"
            },
            body: new URLSearchParams(formData)
        })
        .then((response) => {
            if (response.status === 201) {
                navigate("/login");
            }
            // TODO: display error message (which is currently text) in a toast
            return response.text()
        })
        .catch(error => {
            // TODO: display error message (which is currently text) in a toast
        });
    }

    return (
        <form>
            <div>
                <label htmlFor="firstName">Enter your first name:</label>
                <input type="text" name="firstName" id="firstName" onChange={handleInput} required />
            </div>
            <div>
                <label htmlFor="lastName">Enter your last name:</label>
                <input type="text" name="lastName" id="lastName" onChange={handleInput} required />
            </div>
            <div>
                <label htmlFor="phone">Enter your phone number:</label>
                <input type="phone" name="phone" id="phone" onChange={handleInput} required />
            </div>
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