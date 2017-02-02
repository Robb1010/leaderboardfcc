import React, { Component } from 'react';

const topThirty = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const topAll = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

class Content extends Component {

  state = {
    campers: [],
    all: 'unselected',
    thirty: 'selected'
  }   

  getTopThirty() {
  fetch(topThirty).then((response) => response.json()).then((responseJson) => {
     this.setState({
       campers: responseJson,
       all: 'unselected',
       thirty: 'selected'
     })
    }
  )
 }

 getTopAll() {
   fetch(topAll).then((response) => response.json()).then((responseJson) => {
      this.setState({
        campers: responseJson,
        all: 'selected',
        thirty: 'unselected'
      })
     }
   )

 }

 componentDidMount() {
   this.getTopThirty();
 }

  render() {
    const campers = this.state.campers.map((camper, index) =>
    <li id={camper.username} key={camper.username}>
      <div className="user">
        <div className={"item position"}>{index + 1}</div>
        <img src={camper.img} height='50px' alt='camper' className="item"/>
        <div className="item"><a href={'http://freecodecamp.com/' + camper.username} target="_blank">{camper.username}</a></div>
      </div>
      <div className="numbers">
        <div className={"item thirty"}>{camper.recent}</div>
        <div className="item">{camper.alltime}</div>
      </div>
  </li>
  )
    return (
      <div className="content">
        <ul className="list">
          <li key="title" className="title">
            <div className="user">
              <div className={"item position"}>#</div>
              <div className={"item image"}></div>
              <div className="item">Camper name</div>
              </div>
            <div className="numbers">
              <div className={"item thirty"}>Last 30 days<button className={this.state.thirty} id="thirty" onClick={() => this.getTopThirty()}></button></div>
              <div className="item">All time<button className={this.state.all} id="all" onClick={() => this.getTopAll()}></button></div>
            </div>
        </li>
          {campers}
        </ul>
      </div>
    )
  }
}

export default Content;
