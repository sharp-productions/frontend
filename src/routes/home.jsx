import { useState } from 'react';

export default function Home() {

    const [state, setState] = useState({'agreed': false});

    const title = "Welcome to EasyLegal.app";

    const text = "EasyLegal.app is not taking on new clients at this time, but if you'd like to leave us your email address, we'll happily get back to you when we are.";

    function toggleHandler({ target }) {
        const { checked, name } = target;
        setState({[name]: checked});
    }

    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">{title}</h1>
                    <p className="col-lg-10 fs-4">{text}</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-4 border rounded-3 bg-body-tertiary">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" name="agreed" checked={state.agreed} onChange={toggleHandler} /> I agree to the <a href="/terms">terms and conditions.</a>
                            </label>
                        </div>
                        <button className={`w-100 btn btn-lg btn-primary ${state.agreed ? '' : 'disabled'}`} type="button">Keep me updated!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}