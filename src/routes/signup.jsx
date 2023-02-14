export default function Signup() {
    return (
        <form className="form-example" method="POST">
            <div className="form-example">
                <label htmlFor="firstName">Enter your first name: (Required)</label>
                <input type="text" name="firstName" id="firstName" required />
            </div>
            <div className="form-example">
                <label htmlFor="lastName">Enter your last name: (Required)</label>
                <input type="text" name="lastName" id="lastName" required />
            </div>
            <div className="form-example">
                <label htmlFor="email">Enter your email: (Required)</label>
                <input type="text" name="email" id="email" required />
            </div>
            <div className="form-example">
                <label htmlFor="phone">Enter your phone number: (Recommended)</label>
                <input type="tel" name="phone" id="phone" />
            </div>
            <div className="form-example">
                <label htmlFor="password">Enter your password: (Required)</label>
                <input type="password" name="password" id="password" required />
            </div>
            <div className="form-example">
                <input type="submit" value="Subscribe!" />
            </div>
        </form>
    );
}