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
        <h2 className="center">ProjectNotes</h2>
        <h4 class="center grey-text">Keep your music projects on track</h4>
        <Modal show={this.state.show} handleClose={this.hideModal} >
        </Modal>
        <Link type="button" class="right" onClick={this.showModal}><i class="material-icons addbuttons right medium">add</i></Link>
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
        <Link type="button" class="right"
          onClick={handleClose}
        >
          <i class="material-icons addbutton right small">close</i>
          </Link>
        <Form onSubmit={ handleClose }/>
      </section>
    </div>
  );
};

const modal = document.getElementById("modal-main");

window.onclick = function(event) {
  if (event.target == modal) {
    Modal.hideModal();
  }
}

export default Home