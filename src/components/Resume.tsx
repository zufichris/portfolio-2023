'use client'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
import {
 IconDownload
} from "@tabler/icons-react";

import {  useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Badge } from './Badge';

export function Resume() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

 
  return (
    <div className='w-screen flex justify-center overflow-x-hidden p-5 h-screen overflow-y-scroll'>
      <div className='my-2'>
        <Badge icon={<IconDownload size={20}/>} href="/images/cv.pdf" text="Download" />
      </div>
      <Document
        loading={<div>CV Loading...</div>}
        file="/images/cv.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page   pageNumber={pageNumber} />
      </Document>
    </div>
  );
}