import React, { useState, useEffect} from 'react';
import "./InputPhoto.css"

function InputPhoto({setBase64, setData}) {
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    
   
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
                setData(prevData => ({...prevData, url: base64}));
                
               
                
            };
        }
    }, [imagePreview]);
   

    return (
        <div className='input-file-container'>
            
        <input type="file"onChange={handleFileChange} />
        <label id='buttonBase64' className="custom-file-button">Seleccionar archivo</label>
        </div>
    );
}

export default InputPhoto;