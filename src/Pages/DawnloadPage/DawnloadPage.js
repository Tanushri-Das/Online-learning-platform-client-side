import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { FaDownload } from "react-icons/fa";
import '../DawnloadPage/DawnloadPage.css'

const DownloadPage = ({ rootElementId, downloadFileName }) => {
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p", "pt", "a4")
            pdf.addImage(imgData, "JPEG", 10, 50)
            pdf.save(`${downloadFileName}`)
        })
    }

    return (
        <Container className="mt-4">
        <Row>
            <div className="col-lg-3"></div>
            <div className='col-lg-6'>
                <Button onClick={downloadFileDocument} className="dawnload-btn">Download Page <FaDownload className='ms-3'></FaDownload></Button>
                
            </div>
            <div className="col-lg-3"></div>
        </Row>
      </Container>
        
    );
};

export default DownloadPage;