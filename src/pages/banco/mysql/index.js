import '../../../style.css';
import '../banco.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function Mysql() {
    return (
        <body style={{ backgroundColor: 'var(--cinza-escuro)'}}>
                <CustomComponent linguagem="Mysql" />
        </body>
    );
}