import '../index.css';
import { DisplayFormikState } from '../helper';

import React from 'react';
import { render } from 'react-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const BingoCode = (props) => (
	<div className="app">
	 	 <Formik
	      initialValues={{ code: '' }}
	      onSubmit={(values, { setSubmitting }) => {
	        setTimeout(() => {
	        props.alertCode(values);
	          setSubmitting(false);
	        }, 500);
	      }}
	      validationSchema={Yup.object().shape({
	        code: Yup.string()
	          .required('Required'),
	      })}
	    >
	      {props => {
	        const {
	          values,
	          touched,
	          errors,
	          dirty,
	          isSubmitting,
	          handleChange,
	          handleBlur,
	          handleSubmit,
	          handleReset,
	        } = props;
	        return (
	          <form onSubmit={handleSubmit}>
	            <label htmlFor="email" style={{ display: 'block' }}>
	              Code
	            </label>
	            <input
	              id="code"
	              placeholder="Enter your code"
	              type="text"
	              value={values.code}
	              onChange={handleChange}
	              onBlur={handleBlur}
	              className={
	                errors.code && touched.code ? 'text-input error' : 'text-input'
	              }
	            />
	            {errors.code && touched.code && (
	              <div className="input-feedback">{errors.code}</div>
	            )}

	            <button
	              type="button"
	              className="outline"
	              onClick={handleReset}
	              disabled={!dirty || isSubmitting}
	            >
	              Reset
	            </button>
	            <button type="submit" disabled={isSubmitting}>
	              Enter
	            </button>

	          </form>
	        );
	      }}
	    </Formik>
	  </div>
);
export default BingoCode;