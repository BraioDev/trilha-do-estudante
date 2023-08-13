import React from 'react';
import '../../../style.css';
import '../front.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function Html() {
    return (
        <body style={{ backgroundColor: 'var(--azul-base)' }}>
            <CustomComponent linguagem="Html" />
        </body>
    );
}