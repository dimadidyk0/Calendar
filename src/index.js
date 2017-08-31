import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from './Calendar';

var data = {
  "mo": [
    {
      "bt": 240,
      "et": 779
    }
  ],
  "su": []
};
 
var testObject = { 'one': 1, 'two': 2, 'three': 3 };

localStorage.setItem('testObject', JSON.stringify(testObject));
var retrievedObject = localStorage.getItem('testObject');
console.log('retrievedObject: ', JSON.parse(retrievedObject));


if (!localStorage.getItem('asd')) {
  localStorage.setItem('asd', data)
} else {
  var dataa = localStorage.getItem('asd');
  var a = JSON.parse(dataa);
  console.log(a);
};

ReactDOM.render(<Calendar data={data}/>, document.getElementById('root'));
