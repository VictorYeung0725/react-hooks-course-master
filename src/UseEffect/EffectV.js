import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function EffectV() {
  const [data, setData] = useState('');

  useEffect(() => {
    // console.log('hello world');
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
        console.log('API Was Called');
      });
  });
  return <div>{data}</div>;
}

export default EffectV;
