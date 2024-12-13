// FileUpload.js
import React, { useState, useEffect } from 'react';

function FileUpload( {onUpload} ) {
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        if (onUpload) {
            var fileInput = document.createElement('input');
            // fileInput.innerHTML = "<input type='file' id='fileup'/>"
            // var fileInput = document.getElementById('fileup');
            fileInput.type = 'file';
            fileInput.style.display = 'none';
            fileInput.onchange = () => {
                const file = fileInput.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        setFileContent(reader.result);
                    };
                    reader.readAsText(file);
                }
            };
            fileInput.click(); // 模拟点击，触发文件选择
        }
    }, [onUpload]);

    return (
        <div>
            <input type='file' id='fileup'/>
            <pre>{fileContent}</pre>
        </div>
    );
}

export default FileUpload;