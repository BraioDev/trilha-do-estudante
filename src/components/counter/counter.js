import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
    return (
            <div>
                {props.languages.includes('FRONTEND')}
                <span>Contagem: {props.count}</span>
            </div>
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