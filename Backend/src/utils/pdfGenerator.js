import PDFDocument from 'pdfkit';
import { promisify } from 'util';
import { streamToPromise } from 'pdfkit/lib/pdfkit';

export const generatePDF = async (allocations) => {
    const doc = new PDFDocument();

    allocations.forEach(allocation => {
        doc
            .fontSize(12)
            .text(`Date: ${allocation.date.toDateString()}`, { continued: true })
            .text(`Hall: ${allocation.hall.number}`)
            .text(`Teachers: ${allocation.teachers.map(t => t.name).join(', ')}`)
            .moveDown();
    });

    doc.end();
    return streamToPromise(doc);
};
