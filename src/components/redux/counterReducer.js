const initialState = {
    languages: [],
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FRONTEND':
            state.languages.push('FRONTEND')
            return {
                languages: state.languages,
            };

        case 'BACKEND':
            state.languages.push('BACKEND')
            return {
                languages: state.languages,
            };

        case 'MOBILE':
            state.languages.push('MOBILE')
            return {
                languages: state.languages,
            };

        case 'BANCODADOS':
            state.languages.push('BANCODADOS')
            return {
                languages: state.languages,
            };

        case 'DESIGN':
            state.languages.push('DESIGN')
            return {
                languages: state.languages,
            };

        default:
            return state;
    }
};

export default counterReducer;