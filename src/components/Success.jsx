import React from 'react';

const Success = ({selected}) => {
  return (
    <>
      <img src="/illustration-thank-you.svg" alt="image" />
      <p className="score">You Selected {selected} out of 5</p>
      <h2>Thank You!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </p>
    </>
  );
};

export default Success;
