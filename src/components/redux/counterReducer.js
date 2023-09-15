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

        case 'TYPE':
            state.languages.push('TYPE')
            return {
                languages: state.languages,
            };

        case 'HTML':
            state.languages.push('HTML')
            return {
                languages: state.languages,
            };

        case 'JS':
            state.languages.push('JS')
            return {
                languages: state.languages,
            };

        case 'ANGULAR':
            state.languages.push('ANGULAR')
            return {
                languages: state.languages,
            };

        case 'REACT':
            state.languages.push('REACT')
            return {
                languages: state.languages,
            };

        case 'BOOT':
            state.languages.push('BOOT')
            return {
                languages: state.languages,
            };

        case 'JAVA':
            state.languages.push('JAVA')
            return {
                languages: state.languages,
            };

        case 'PYTHON':
            state.languages.push('PYTHON')
            return {
                languages: state.languages,
            };

        case 'CSHARP':
            state.languages.push('CSHARP')
            return {
                languages: state.languages,
            };

        case 'POSTMAN':
            state.languages.push('POSTMAN')
            return {
                languages: state.languages,
            };

        case 'SPRING':
            state.languages.push('SPRING')
            return {
                languages: state.languages,
            };

        case 'SWAGGER':
            state.languages.push('SWAGGER')
            return {
                languages: state.languages,
            };

        default:
            return state;
    }
};

export default counterReducer;