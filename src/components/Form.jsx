import { useState } from "react";
import style from "./Form.module.css";
import Validate from "./Validations";
const Form = (props) => {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setuserData({ ...userData, [property]: value });
    setErrors(Validate({ ...userData, [property]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.login(userData);
  }
  return (
    <div className={style.container}>
      <div className={style.central}>
        <div className={style.login}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
            ></input>
            <p>{errors.email}</p>
            <label htmlFor="password">Contraseña</label>
            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={handleChange}
            ></input>
            <p>{errors.password}</p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
