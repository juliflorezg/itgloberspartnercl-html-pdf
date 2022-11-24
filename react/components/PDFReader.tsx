import React, {useState, useEffect} from 'react'

type Props = {
  pdfUrl: string
  width?: number
  height?: number
}

const PDFReader:React.FC<Props> = ({pdfUrl, width, height}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(()=> {
    setMounted(true)
  }, [])

  console.log({pdfUrl, width, height})
  return (
    mounted
    ?
      <div className='flex justify-center mv4'>
        <object
          data = {pdfUrl}
          type = "application/pdf"
          width = {width}
          height = {height}
        >
          <iframe src={pdfUrl} title="PDF" width={width} height={height}>
            <p>Este navegador no soporta PDF :c</p>
          </iframe>
        </object>
        </div>
    :
      <p>Este es mi lector de PDF</p>
  )
}

export default PDFReader
