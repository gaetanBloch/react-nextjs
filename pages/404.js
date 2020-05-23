import React, { Fragment } from 'react';
import Router from 'next/router';

const ErrorPage = () => (
  <Fragment>
    <h1>Oops, Something went wrong!</h1>
    <button onClick={() => Router.push('/auth')}>Go Back Home</button>
  </Fragment>
);

export default ErrorPage;
