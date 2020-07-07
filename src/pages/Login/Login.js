import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Form = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    & form input {
        font-size: 20px;
        margin: 5px 0;
        padding: 5px;
    }
`;

function Login() {
    const history = useHistory();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem("user", JSON.stringify(userLogin));
        history.push("/pokemons");
    };

    return (
        <Form>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={userLogin.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={userLogin.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <div style={{ textAlign: "center" }}>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </Form>
    );
}

export default Login;
