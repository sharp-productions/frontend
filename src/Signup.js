function Signup() {

    const API_DOMAIN = process.env.REACT_APP_DOMAIN;
    
    return (
      <form className="form-example" action={API_DOMAIN}>
        <div className="form-example">
          <label htmlFor="firstName">Enter your first name: </label>
          <input type="text" name="firstName" id="firstName" required />
        </div>
        <div className="form-example">
          <label htmlFor="lastName">Enter your last name: </label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div className="form-example">
          <label htmlFor="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-example">
          <label htmlFor="phone">Enter your phone number: </label>
          <input type="phone" name="phone" id="phone" required />
        </div>
        <div className="form-example">
          <input type="submit" value="Subscribe!" />
        </div>
      </form>
    );
  }