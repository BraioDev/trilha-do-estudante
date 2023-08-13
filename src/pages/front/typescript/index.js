import React from 'react';
import '../../../style.css';
import '../front.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function TypeScript() {
    return (
        <body style={{ backgroundColor: 'var(--azul-base)' }}>
            <CustomComponent linguagem="TypeScript" />
        </body>
    );
}