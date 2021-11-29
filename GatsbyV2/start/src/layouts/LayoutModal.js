import React, {Component} from 'react' //forma de crear clases con react
import ReactModal from 'react-modal'
import {Link} from 'gatsby'

import LayoutBasico from './LayoutBasico'



class LayoutModal extends Component {
    constructor(props) {
        super(props)
        this.state= {
            isModalOpen: false,
        }
    }
    handleModalOpen = event => {
        this.setState({ isModalOpen: true})
    }
    handleModalClose = event => {
        this.setState({ isModalOpen: false})
    }
    render() {
        return(
            <LayoutBasico>
                <div id="main">
                    <h3>Este es el Main</h3>
                    <p>Contenido del Main</p>
                    <button onClick={this.handleModalOpen}>Abrir Modal</button>
                </div>
                <ReactModal
                appElement={document.querySelector('#main')} 
                isOpen={this.state.isModalOpen} 
                onRequestClose={this.handleModalClose} 
                contentLabel="Modal React en Gatsby"
                > 
                    <h3>Titulo del Modal</h3>
                    <button onClick={this.handleModalClose}>Cerrar Modal</button>
                </ReactModal>
            </LayoutBasico>
        )
    }
}

export default LayoutModal