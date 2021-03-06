import React, { Component } from "react";
import "./ListElement.css"
import InvoiceBtn from "../buttons/SquareBtns/InvoiceBtn";
import TrashBtn from "../buttons/SquareBtns/TrashBtn";
import VehicleIcon from "../elements/VehicleIcon";
import {toast} from "react-toastify";

class Staying extends Component {

    render() {
        const {amount, parkingName, street, number, city, type} = this.props.element;
        return (
            <div className="list-element-container">
                <div>
                    <div>{parkingName}</div>
                    <div style={{fontSize: '0.4em'}}>{`${street} ${number}, ${city}`}</div>
                    <VehicleIcon type={type}/>
                    <div style={{fontSize: '0.5em'}}>{`Zapłacono: ${amount} zł`}</div>
                </div>
                <div className="buttons-container">
                    <InvoiceBtn click={() => {toast.info('Generowanie faktur dostępne wkrótce');}}/>
                    <TrashBtn click={this.props.deleteClick}/>
                </div>
            </div>
        );
    }
}

export default Staying;