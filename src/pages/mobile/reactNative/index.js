import '../../../style.css';
import '../mobile.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function ReactNative() {
    return (
        <body style={{ backgroundColor: 'var(--verde-claro)'}}>
            <CustomComponent linguagem="ReactNative" />
        </body>
    );
}