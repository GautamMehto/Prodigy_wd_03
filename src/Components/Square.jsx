import React from 'react';

const Square = ({ counter, value, onClick }) => {
  let btn = document.getElementsByClassName("square")[counter - 1];
  if (value == "X") {
    btn.style.background = "linear-gradient(90deg, rgba(0,34,168,1) 0%, rgba(0,220,242,1) 100%)";
    btn.style.color = "transparent";
    btn.style.backgroundClip = "text"
    btn.style.textShadow ="#00c7ff73 1px 10px 7px"

  }
  else if (value == "O") {
    btn.style.background = "linear-gradient(90deg, rgba(199,38,3,1) 0%, rgba(242,174,0,1) 100%)";
    btn.style.color = "transparent";
    btn.style.textShadow ="#ff4500bd 1px 8px 7px"
    btn.style.backgroundClip = "text"
  }
  console.log(counter, value);
  return (
    <button className="square w-1/3 border-[5px] border-black h-full bg-slate-300 rounded-2xl text-center text-8xl font-extrabold" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;