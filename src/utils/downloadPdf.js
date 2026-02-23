import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export async function downloadPdf() {
  const element = document.getElementById('resume-page')

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
  })

  const imgData = canvas.toDataURL('image/png')

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = pdf.internal.pageSize.getHeight()

  const canvasWidth = canvas.width
  const canvasHeight = canvas.height

  const ratio = canvasWidth / pdfWidth
  const totalPdfHeight = canvasHeight / ratio

  // if content is taller than one page, split into multiple pages
  let position = 0
  let remainingHeight = totalPdfHeight

  while (remainingHeight > 0) {
    pdf.addImage(
      imgData,
      'PNG',
      0,
      -position,
      pdfWidth,
      totalPdfHeight,
    )

    remainingHeight -= pdfHeight
    position += pdfHeight

    if (remainingHeight > 0) {
      pdf.addPage()
    }
  }

  pdf.save('Amri_Azri_Resume.pdf')
}