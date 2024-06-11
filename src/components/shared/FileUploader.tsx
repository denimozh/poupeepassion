import React, { useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'
import { Button } from '../ui/button';

type FileUploaderProps = {
    fieldChange : (FILES: File[]) => void,
    mediaUrl: string;
}

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
    const [file, setFile] = useState<File[]>([]);
    const [fileUrl, setFileUrl] = useState();

    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        setFile(acceptedFiles);
        fieldChange(acceptedFiles);
        setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    }, [file])

    const {getRootProps, getInputProps  } = useDropzone({onDrop, accept:{'image/*': ['.png', '.jpeg', '.jpg', '.svg']}})

    return (
        <div {...getRootProps()} className='flex justify-center items-center flex-col bg-slate-100 border border-slate-200 rounded-lg cursor-pointer'>
            <input {...getInputProps()} className='cursor-pointer'/>
            {
                fileUrl ? (
                    <>
                        <div className='flex flex-1 justify-center w-full p-5 lg:p-10'>
                            <img src={fileUrl} alt='image' className='h-80 lg:h-[480px] w-full rounded-[24px] object-cover object-top'/>
                        </div>
                        <p className='text-center w-full p-4 border-t border-t-slate-400 text-slate-400'>Click or Drag Photo to Replace</p>
                    </>
                ) : (
                    <div className='flex justify-center items-center flex-col p-7 h-80 lg:h-[612px]'>
                        <img src='/assets/icons/fileUpload.svg' width={96} height={77} alt='file-upload'/>
                        <h3 className='text-xl text-slate-500 mb-2 mt-6'>Drag Photo Here</h3>
                        <p className='text-lg mb-6 text-slate-400'>SVG, PNG, JPEG</p>
                        <Button className="h-12 px-5 flex gap-2">Select From Device</Button>
                    </div>
                )
            }
        </div>
    )
}

export default FileUploader