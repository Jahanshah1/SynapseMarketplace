import { useState, useMemo, useCallback, useContect } from "react";
import {useRouter} from 'next/router';
import { useDropzone} from 'react-dropzone';
import Image from 'next/image';
import {useTheme} from 'next-themes';

import {Button} from '../components';
import images from '../assets';

const CreateNFT = () => {
    const [file, setfile] = useState(null);
    const {theme} = useTheme();

    const onDrop = useCallback(() => {
        //upload to ipfs
    }, [])

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({onDrop, accept:'image/*', maxSize:'5000000'})
    const fileStyle = useMemo(() => (`dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed 
    ${isDragActive && 'border-file-acive'} 
    ${isDragAccept && 'border-file-acive'} 
    ${isDragReject && 'border-file-acive'}`),[isDragAccept,isDragActive,isDragReject])

    return(
        <div className='flex justify-center p-12'>
            <div className='w-3/5 md:w-full '>
                <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-semibold">
                    Create New NFT
                </h1>
                <div className='mt-16 '>
                    <p className='font-poppins text-nft-black-1 dark:text-white text-xl font-semibold'>Upload File</p>
                    <div className='mt-4'>
                        <div {...getRootProps} className={fileStyle}>
                            <input className={fileStyle} {...getInputProps()}/>
                            <div className='flex-center flex-col text-center'>
                                <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-xl'>JPG,PNG,SVG,WEBM</p>
                                <div className='my-12 w-full flex justify-center'>
                                    <Image src={images.upload} width={100} height={100} objectFit='contain' alt='file upload' className={ theme === 'light' && 'filter invert'}/>
                                    </div>
                                 <p className='font-poppins text-nft-black-1 dark:text-white text-sm font-semibold'>Drag and Drop FIle</p>
                                 <p className='font-poppins text-nft-black-1 dark:text-white text-sm font-semibold mt-2'> or Browse media on your device</p>
                            </div>
                        </div>
                        {/*{fileUrl && (<aside><div><img src={fileUrl} alt='asset_file'></img></div></aside>)} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNFT;