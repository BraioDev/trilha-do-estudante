import '../../../style.css';
import '../mobile.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function Ionic() {
    return (
        <body style={{ backgroundColor: 'var(--verde-claro)'}}>
            <CustomComponent linguagem="Ionic" />
        </body>
    );
}