import '../../../style.css';
import '../front.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function Angular() {
    return (
        <body style={{ backgroundColor: 'var(--azul-base)' }}>
            <CustomComponent linguagem="Angular" />
        </body>
    );
}