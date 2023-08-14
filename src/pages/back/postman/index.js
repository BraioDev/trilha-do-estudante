import '../../../style.css';
import '../back.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function Postman() {
    return (
        <body style={{ backgroundColor: 'var(--preto-cinza)' }}>
            <CustomComponent linguagem="Postman" />
        </body>
    );
}