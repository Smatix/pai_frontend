import React, { Component } from "react";
import "./Stayings.css"
import List from "../../../shared/elements/List/List";
import Staying from "../../../shared/list_element/Staying";
import axios from "axios";
import config from "../../../config";
import {toast} from "react-toastify";


class Stayings extends Component {

    state = {
        stayings: []
    };

    componentDidMount() {
        axios.get(`${config.url}/api/user/stayings/history`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => {
                this.setState({
                    stayings: res.data,
                });
            })
            .catch(err => {
                toast.error('Problem z pobraniem danych');
            })
    }

    render() {
        return (
            <div className="reservations-container">
                <List
                    title="Historia pobytów"
                    list={
                        this.state.stayings.map(el => {
                            return <Staying
                                key={el.id}
                                element={el}
                            />
                        })
                    }
                />
            </div>
        );
    }
}

export default Stayings;