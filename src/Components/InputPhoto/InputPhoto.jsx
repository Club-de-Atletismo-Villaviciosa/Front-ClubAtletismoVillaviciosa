import React, { useState, useEffect} from 'react';
import "./InputPhoto.css"

function InputPhoto({handleChange}) {
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [base64, setBase64] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    useEffect(() => {
        if (imagePreview) {
            const canvas = document.createElement("canvas");
            const image = new Image();
            image.src = imagePreview;
            image.onload = () => {
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
                const context = canvas.getContext("2d");
                context.drawImage(image, 0, 0);
                const base64 = canvas.toDataURL();
                setBase64(base64);
               
                
            };
        }
    }, [imagePreview]);

    return (
        <div className='input-file-container'>
            <textarea value={base64} required className="form-control" placeholder="Añade una foto"  onChange= {handleChange}
                                id="photo"/>
        <input type="file"onChange={handleFileChange} id="archivo" name="archivo"/>
        <label id='buttonBase64' for="archivo" className="custom-file-button">Seleccionar archivo</label>
        </div>
    );
}

export default InputPhoto;