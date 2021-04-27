import React from 'react'

import useForm from "./useForm";
import validate from './formValidations';

const SignUpForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);




  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>

            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.username && 'is-danger'}`} type="text" id='username' name="username" onChange={handleChange} value={values.username || ''} required />
                  {errors.username && (
                    <p className="help is-danger">{errors.username}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>

         

              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>


              


              <button type="submit" className="button is-block is-primary is-fullwidth">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
