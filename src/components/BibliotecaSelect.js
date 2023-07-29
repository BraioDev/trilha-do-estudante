import React, { Component } from 'react';
import '../style.css';

class BibliotecaSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'default',
        };
    }

    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    };

    render() {
        return (
            <div className="col-2">
                <select value={this.state.selectedOption} onChange={this.handleChange}>
                    <option value="default">Biblioteca</option>
                    <option value="biblioteca">Minha biblioteca</option>
                    <option value="sophiaBiblioteca">Sophia biblioteca</option>
                </select>
            </div>
        );
    }
}

export default BibliotecaSelect;