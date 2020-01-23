import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import List from "../containers/List"
import "../modal.css"

export class Home extends Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }
    


  render() {
    return (
      <div>
        <h2 className="center">Welcome to ProjectNotes</h2>
        <h4 class="center grey-text">Keep your music projects on track</h4>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type='button' onClick={this.showModal}>Open</button>
        <Link to="/tracks/new"><i class="material-icons addbutton right medium">add</i></Link>
        <List></List>
      </div>
    )
  }
}

let Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};


const container = document.createElement('div');
document.body.appendChild(container);
export default Home