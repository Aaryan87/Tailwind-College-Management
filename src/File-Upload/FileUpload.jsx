import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useState, useEffect } from 'react'

function FileUpload() {
  const [files, setFiles] = useState(JSON.parse(localStorage.getItem('files')) || [])

  useEffect(() => {
    localStorage.setItem('files', JSON.stringify(files))
  }, [files])

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onloadend = () => {
        setFiles(prevFiles => [...prevFiles, { name: file.name, data: reader.result }])
      }

      reader.readAsDataURL(file)
    })
  }, [])

  const handleRemove = fileName => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName))
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-file-upload bg-cover bg-center">
      <div className="p-4 flex flex-col justify-center items-center backdrop-blur-md">
        <div {...getRootProps()} className="flex justify-center items-center w-full h-52 px-4 transition bg-white border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-gray-400 focus:outline-none">
          <input {...getInputProps()} />
          <p className="text-center">Drag 'n' drop some files here, or click to select files</p>
        </div>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="mt-6 w-96 mb-2 flex justify-between items-center bg-white p-2 rounded shadow">
              <span className="text-gray-800">{file.name}</span>
              <button onClick={() => handleRemove(file.name)} className="text-white bg-red-500 hover:bg-red-600 rounded px-2 py-1">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FileUpload;
