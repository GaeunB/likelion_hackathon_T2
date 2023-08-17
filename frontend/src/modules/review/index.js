import React, { useState } from 'react';

const Review = () => {
  const [liked, setLiked] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = () => {
    console.log('피드백 내용:', feedback);
  };

  return (
    <div className="container mx-auto p-5 text-center">
      <div className="mb-4">
        <img alt="logo" src="./logoCBG.png" className="lg:w-1/6 mx-auto mb-4" />
        <h3 className="mb-4 text-4xl font-bold">결제완료!</h3>
      </div>
      <div className="lg:w-1/2 mx-auto relative">
        <img src="./Tshirts.jpg" alt="조던 드라이 핏 스포츠" className="w-full h-auto rounded" />
        <button
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 mt-4 rounded-full flex items-center transition duration-300 ${
            liked ? 'text-red-500' : ''
          }`}
          onClick={handleLikeToggle}
        >
          <span className="text-4xl">{liked ? '♡' : '♥'}</span>
        </button>
      </div>
      <div className="mt-8">
        <textarea
          className="w-full p-3 rounded border"
          placeholder="피드백을 입력하세요..."
          rows={4}
          value={feedback}
          onChange={handleFeedbackChange}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 mt-4 rounded-full transition duration-300 text-2xl"
          onClick={handleSubmitFeedback}
          style={{ backgroundColor: '#F07373' }} // 여기에 추가
        >
          피드백 제출
        </button>
      </div>
    </div>
  );
};

export default Review;
