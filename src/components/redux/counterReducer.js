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

        case 'ANDROID':
            state.languages.push('ANDROID')
            return {
                languages: state.languages,
            };

        case 'FLUTER':
            state.languages.push('FLUTER')
            return {
                languages: state.languages,
            };

        case 'IONIC':
            state.languages.push('IONIC')
            return {
                languages: state.languages,
            };

        case 'NATIVE':
            state.languages.push('NATIVE')
            return {
                languages: state.languages,
            };

        case 'XAMARIN':
            state.languages.push('XAMARIN')
            return {
                languages: state.languages,
            };

        case 'XCODE':
            state.languages.push('XCODE')
            return {
                languages: state.languages,
            };

        case 'ORACLE':
            state.languages.push('ORACLE')
            return {
                languages: state.languages,
            };

        case 'HEID':
            state.languages.push('HEID')
            return {
                languages: state.languages,
            };

        case 'PGADMIN':
            state.languages.push('PGADMIN')
            return {
                languages: state.languages,
            };

        case 'MONGODB':
            state.languages.push('MONGODB')
            return {
                languages: state.languages,
            };

        case 'MYSQL':
            state.languages.push('MYSQL')
            return {
                languages: state.languages,
            };

        case 'SQLITE':
            state.languages.push('SQLITE')
            return {
                languages: state.languages,
            };

        case 'FIGMA':
            state.languages.push('FIGMA')
            return {
                languages: state.languages,
            };

        case 'CANVA':
            state.languages.push('CANVA')
            return {
                languages: state.languages,
            };

        case 'ILLUSTRATOR':
            state.languages.push('ILLUSTRATOR')
            return {
                languages: state.languages,
            };

        case 'INVISION':
            state.languages.push('INVISION')
            return {
                languages: state.languages,
            };

        case 'SKETCH':
            state.languages.push('SKETCH')
            return {
                languages: state.languages,
            };

        case 'ADOBEPH':
            state.languages.push('ADOBEPH')
            return {
                languages: state.languages,
            };

        default:
            return state;
    }
};

export default counterReducer;