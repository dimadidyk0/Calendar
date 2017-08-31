import React, { Component } from 'react';
import './Day.css';

class Day extends Component {

  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  buildHours() {
    let hours = new Array(24);
    let arr = [];
    for (let i = 0; i < 24; i++) {
      arr.push(false)
    }
    let chosen = this.getChosenHours();
    chosen.forEach(i => {
      arr[i] = true;
    });

    return arr;
  }

  getChosenHours() {
    let arr = [];
    let props = this.props.data;
    localStorage.setItem('data', this.props);
    props.forEach(p => {
      for (;p[0] < p[1]; p[0]++) {
        arr.push(p[0]);
      }
    });
    return arr;
  }

  chooseHour(e) {
    let item = e.target;
    let state = item.getAttribute('data-chosen') === 'true' ? true : false;
    item.setAttribute('data-chosen', !state);
  }

  chooseFirst(e) {
    let item = e.target;
    item.classList.add('start'); 
    this.setState({
      isActive: true
    });
  }

  chooseLast(e) {
    let item = e.target;
    let parent = item.parentNode;

    let start = parent.querySelector('.start');
    if (start) {
      // start.classList.remove('start');
      start.setAttribute('data-chosen', 'true');
      item.setAttribute('data-chosen', 'true');
    }    
    
    this.setState({
      isActive: false
    });

    this.fillSpaceBetween(start, item);
    // if (document.querySelector('.hover-end')) document.querySelector('.hover-end').classList.remove('hover-end');
  }

  getAllHours(parent) {
    return [...parent.querySelectorAll('span')];
  }

  hover(e) {
    let item = e.target;
    let prev = document.querySelector('.hover-end');
    let start = document.querySelector('.start');
    if (prev) prev.classList.remove('hover-end');
    item.classList.add('hover-end');
  }

  fillSpaceBetween(start, end, boolean) {
    let first = +start.getAttribute('data-count');
    let last = +end.getAttribute('data-count');
    let allHours = this.getAllHours(start.parentNode);

    if (first > last) {
      // data.push([last, first]);
    } else if (first < last) {
      // data.push([first, last]);      
    } else { 
      // data.push([first, first]);      
    }
    
    start.className = '';
    end.className = ''
  }



  render() {
    
    let props = this.props;
    return (
      <div className="day">
        <div className="day__name">
          {props.day}
        </div>
        <a className="day__btn"></a>
        <div className="day__graph" 
          onMouseDown={this.chooseFirst.bind(this)} 
          onMouseOver={this.state.isActive ? this.hover : null}
          onMouseUp={this.chooseLast.bind(this)}
        >

          {
            this.buildHours().map((i, y) => {
              return <span key={y} data-chosen={i} data-count={y}></span>
            })
          }

        </div>
      </div>
    )
  }
}

export default Day;
