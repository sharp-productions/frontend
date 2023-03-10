import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signup } from "./signupAPI";

export const Signup = () => {
    const [state, setState] = useState({agreed: false});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInput = function ({ target }) {

        const { checked, name, type, value } = target;
        setState({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = async () => {
        const { firstName, lastName, phone, email, password } = state;
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("password", password);
        try {
            await dispatch(signup(formData)).unwrap();
            navigate("/login");
        } catch (error) {
            // TODO: create proper error message
        }
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

                .form-signin input {
                    border-radius: 0;
                }

                .form-signin input.first {
                    margin-bottom: -1px;
                    border-top-right-radius: 0.375rem;
                    border-top-left-radius: 0.375rem;
                }

                .form-signin input.last {
                    margin-bottom: 10px;
                    border-bottom-left-radius: 0.375rem;
                    border-bottom-right-radius: 0.375rem;
                }
            `}</style>
            <main className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please enter your information</h1>

                    <div className="form-floating">
                        <input type="text" name="firstName" className="form-control first" id="firstName" onChange={handleInput} placeholder="John" required />
                        <label htmlFor="firstName">Enter your first name:</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="lastName" className="form-control" id="lastName" onChange={handleInput} placeholder="Smith" required />
                        <label htmlFor="lastName">Enter your last name:</label>
                    </div>
                    <div className="form-floating">
                        <input type="phone" name="phone" className="form-control" id="phone" onChange={handleInput} placeholder="(555)555-5555" required />
                        <label htmlFor="phone">Enter your phone number:</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" name="email" id="email" className="form-control" onChange={handleInput} placeholder="name@example.com" required />
                        <label htmlFor="email">Enter your email:</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" className="form-control last" id="password" placeholder="Password" onChange={handleInput} required />
                        <label htmlFor="password">Enter your password:</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" name="agreed" checked={state.agreed} onChange={handleInput} /> I agree to the <a href="/terms">terms and conditions.</a>
                        </label>
                    </div>
                    <button className={`w-100 btn btn-lg btn-primary ${state.agreed ? '' : 'disabled'}`} type="button" onClick={handleSubmit}>Sign up</button>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
                </form>
            </main>
        </>
    )
}