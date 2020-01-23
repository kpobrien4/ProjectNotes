import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import List from "../containers/List"
import "../modal.css"
import Form from '../containers/Form'

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
        </Modal>
        <a type="button" class="right" onClick={this.showModal}><i class="material-icons addbutton right medium">add</i></a>
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
        <a type="button" class="right"
          onClick={handleClose}
        >
          <i class="material-icons addbutton right small">close</i>
        </a>
        <Form/>
      </section>
    </div>
  );
};


const container = document.createElement('div');
document.body.appendChild(container);
export default Home