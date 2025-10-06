import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const fileUrl = "/sample.pdf"; // Example: in public/sample.pdf

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber((prev) => Math.min(Math.max(prev + offset, 1), numPages));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-semibold text-center mb-4">PDF Viewer</h1>

        <div className="border rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
          <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          <button onClick={() => changePage(-1)} className="px-3 py-1 border rounded-md hover:bg-gray-200">Prev</button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <button onClick={() => changePage(1)} className="px-3 py-1 border rounded-md hover:bg-gray-200">Next</button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-3">
          <button onClick={() => setScale((s) => Math.max(0.5, s - 0.25))} className="px-3 py-1 border rounded-md hover:bg-gray-200">-</button>
          <span>Zoom: {(scale * 100).toFixed(0)}%</span>
          <button onClick={() => setScale((s) => Math.min(2, s + 0.25))} className="px-3 py-1 border rounded-md hover:bg-gray-200">+</button>
        </div>
      </div>
    </div>
  );
}
