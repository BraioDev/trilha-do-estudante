import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
    return (
        <body>
            <div>
                <h3>Contador Redux</h3>
                <span>Contagem: {props.count}</span>
                <button onClick={props.incremento}>Incrementar</button>
                <button onClick={props.decremento}>Decrementar</button>
            </div>
        </body>
    );
}

const mapState = (state) => {
    return {
        count: state.count,
    };
}

const mapAssociate = (dispatch) => {
    return {
        incremento: () => dispatch({ type: 'INCREMENTO' }),
        decremento: () => dispatch({ type: 'DECREMENTO' }),

    };
}

export default connect(mapState, mapAssociate)(Counter);