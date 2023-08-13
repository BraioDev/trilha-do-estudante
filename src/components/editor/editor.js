import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai'; // Escolha um tema de sua preferência
import 'ace-builds/src-noconflict/mode-javascript'; // Escolha a linguagem de programação desejada

const CodeEditor = () => {
    const handleCodeChange = (newCode) => {
        console.log(newCode); // Faça o que desejar com o código alterado
    };

    return (
        <AceEditor
            mode="javascript"
            theme="monokai"
            onChange={handleCodeChange}
            name="code-editor"
            editorProps={{ $blockScrolling: true }}
            style={{ width: '100%', height: '300px' }} // Defina o tamanho conforme necessário
        />
    );
};

export default CodeEditor;