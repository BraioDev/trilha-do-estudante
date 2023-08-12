import React from 'react';
import '../../../style.css';
import '../front.css';
import CustomComponent from '../../../components/customJson/customJson';

export default function TypeScript() {
    return (
        <body style={{ backgroundColor: 'var(--azul-base)' }}>
            <div className="container">
                <div className="row">
                    <div>
                        <CustomComponent type="Front" id={1}/>
                    </div>
                </div>
            </div>
        </body>
    );
}