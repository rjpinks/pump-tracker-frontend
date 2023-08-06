import React, { useState } from "react";

const Login = function () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (event) => {
        event.preventDefault();

        console.log('email -> ', email);
        console.log('password -> ', password)

        try {
            await fetch('http://localhost:3001/api/profile/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' }
            });
            console.log('Successful Login');
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="input-email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="input-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={loginHandler}>Submit</button>
        </form>
    )
}

export default Login