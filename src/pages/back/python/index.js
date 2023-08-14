import '../../../style.css';
import '../back.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function Python() {
    return (
        <body style={{ backgroundColor: 'var(--preto-cinza)' }}>
            <CustomComponent linguagem="Python" />
        </body>
    );
}