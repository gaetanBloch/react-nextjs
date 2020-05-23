import React from 'react';
import User from '../../components/User';

const Index = () => (
  <div>
    <User name="Gaëtan" age={28} />
    <style jsx>
      {`
        div {
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
      `}
    </style>
  </div>
);

export default Index;
