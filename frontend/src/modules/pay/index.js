import React, { useState } from 'react';
const Pay = () => {

  const contentArray = ['결제하기', '3', '2', '1'];
  const [index, setIndex] = useState(0);
  const handleButtonClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    if (index == 3 ) {

    window.location.href = '/Review'
      

    }


  }

  return (
    <div className='App'>
      <div className='center'>
      <img  alt="logo" src="./logoCBG.png" className="lg:w-1/6 px-4 py-10 mx-auto"/>
      </div>

      <button className='pbtn'>결제수단등록</button>
      <button className='pbtn' onClick={handleButtonClick}> {contentArray[index]} </button>

    </div>
  );
};
export default Pay;