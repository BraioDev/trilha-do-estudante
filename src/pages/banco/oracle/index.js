import '../../../style.css';
import '../banco.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function Oracle() {
    return (
        <body style={{ backgroundColor: 'var(--cinza-escuro)'}}>
               <CustomComponent linguagem="Oracle" />
        </body>
    );
}