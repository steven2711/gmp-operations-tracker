import React, { useState } from "react";
import Form from "../../blocks/Form";

const Login = ({ title }) => {
  //   const authContext = useContext(AuthContext);

  //   const { login, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    // login({ email, password });
  };

  //   useEffect(() => {
  //     if (isAuthenticated) {
  //       props.history.push("/dashboard");
  //     }

  //     setTimeout(clearErrors, 5000);
  //     // eslint-disable-next-line
  //   }, [error, isAuthenticated, props.history]);

  return (
    <Form onSubmit={onSubmit}>
      <Form.Title>{title}</Form.Title>

      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Input
          type="password"
          name="password"
          value={password}
          required
          onChange={onChange}
        />
      </Form.Group>

      <Form.Submit type="submit">Login</Form.Submit>
    </Form>
  );
};

export default Login;
