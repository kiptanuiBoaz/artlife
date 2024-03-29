import React from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';


export const PdfDisp = ({pdfFile}) => {
  return (
    <div style={{width:"100%"}}>
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}
