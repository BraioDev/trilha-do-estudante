import '../../../style.css';
import '../front.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function React() {
    return (
        <body style={{ backgroundColor: 'var(--azul-base)' }}>
            <CustomComponent linguagem="React" />
        </body>
    );
}