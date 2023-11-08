import React, { useRef } from 'react';

function RefV() {
  const inputRef = useRef(null);

  const onClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Victor</h1>
      <input type="text" placeholder="enter..." ref={inputRef}></input>
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefV;
