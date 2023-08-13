import '../../../style.css';
import '../front.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function Bootstrap() {
    return (
        <body style={{ backgroundColor: 'var(--azul-base)' }}>
            <CustomComponent linguagem="Bootstrap" />
        </body>
    );
}