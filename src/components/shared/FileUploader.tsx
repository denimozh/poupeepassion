import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const FileUploader = () => {
    const [fileUrl, setFileUrl] = useState();
    const onDrop = useCallback(acceptedFiles => {

    }, [])

    const {getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

    return (
        <div {...getRootProps()} className='justify-center flex flex-center flex-col bg-slate-100 border border-slate-200 rounded-lg cursor-pointer'>
            <input {...getInputProps()} className='cursor-pointer'/>
            {
                fileUrl ? (
                    <p>test1</p>
                ) : (
                    <p>test2</p>
                )
            }
        </div>
    )
}

export default FileUploader