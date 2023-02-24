import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [state, setState] = useState({});
    const navigate = useNavigate();

    const handleInput = function ({ target }) {
        const { name, value } = target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = function () {
        const { email, password } = state;
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
        <>
            <style>{`
                html, body {
                    height: 100%;
                }

                body {
                    display: flex;
                    align-items: center;
                    padding-top: 40px;
                    padding-bottom: 40px;
                    background-color: #f5f5f5;
                }

                main {
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                }

                .form-signin {
                    max-width: 330px;
                    padding: 15px;
                }

                .form-signin .form-floating:focus-within {
                    z-index: 2;
                }

                .form-signin input[type="email"] {
                    margin-bottom: -1px;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }

                .form-signin input[type="password"] {
                    margin-bottom: 10px;
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                }
            `}</style>
            <main className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" name="email" id="email" onChange={handleInput} className="form-control" placeholder="name@example.com" required />
                        <label htmlFor="email">Enter your email:</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={handleInput} required />
                        <label htmlFor="password">Enter your password:</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleSubmit}>Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
                </form>
            </main>
        </>
    )
}