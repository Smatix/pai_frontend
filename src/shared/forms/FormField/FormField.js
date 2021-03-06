import React, { Component } from "react";
import "./FormField.css"

class FormField extends Component {

    render() {
        return (
            <div className="form-field-container">
                <label>{this.props.label}</label>
                <input
                    style={this.props.error ? {border: "1px solid red"} : null}
                    type={this.props.type}
                    className="form-field"
                    placeholder={this.props.placeholder}
                    onChange={this.props.change}
                    name={this.props.name}
                    value={this.props.value}
                />
                {this.props.error ? <div className="error-msg">{this.props.error}</div> : null}
            </div>
        );
    }
}

export default FormField;