// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Card.css';
import linkedinPlaceholder from '../assets/linkedin.png';

function Card() {
    const location = useLocation();
    const cardRef = useRef();
    const { name, jobTitle, email, phone, linkedin, image } = location.state || {};

    const handleDownloadPdf = () => {
        const element = cardRef.current;

        setTimeout(() => {
            html2canvas(element, { scale: 2 }).then((canvas) => {
                const imgData = canvas.toDataURL('image/jpeg');
                const pdf = new jsPDF('p', 'in', 'letter');
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${name || 'BuzzCard'}.pdf`);
            });
        }, 500);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
            <div
                ref={cardRef}
                className="card"
                style={{
                    height: '25rem',
                    width: '35rem',
                    border: '2px solid blue', 
                    background: '#f2f2f2',
                    boxShadow: '-32px -32px 35px rgba(0, 0, 0, 0.4), 32px 32px 35px rgba(0, 0, 0, 0.4)',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '1rem',
                }}
            >
                <div style={{ marginTop: '1rem' }}>
                    <img
                        className="card-image"
                        src={image || 'https://assets.codepen.io/2826202/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1548274815&width=80'}
                        alt="User Avatar"
                        style={{
                            height: '7rem',
                            width: '7rem',
                            borderRadius: '50%',
                            background: '#f2f2f2',
                            boxShadow: '-6px -6px 10px rgba(255, 255, 255, 1), 4px 4px 15px rgba(0, 0, 0, 0.15)',
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <div className="card-body" style={{ marginTop: '1rem', textAlign: 'center', letterSpacing: '0.1rem' }}>
                    <h1 className="card-body_name" style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#707174', fontWeight: '600' }}>
                        {name || 'Your Name'}
                    </h1>
                    <h2 className="card-body_job" style={{ fontSize: '1.1rem', color: '#bbbbbb', fontWeight: '400' }}>
                        {jobTitle || 'Your Job Title'}
                    </h2>
                    <p className="card-body_contact" style={{ fontSize: '0.9rem', color: '#828282' }}>
                        <i className="fa fa-mobile" aria-hidden="true"></i> {phone || '+123456789'}
                    </p>
                    <p className="card-body_contact" style={{ fontSize: '0.9rem', color: '#828282' }}>
                        <i className="fa fa-envelope" aria-hidden="true"></i> {email || 'example@example.com'}
                    </p>
                </div>
                <div className="card-footer" style={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className="card-footer_social" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                        {linkedin ? (
                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                style={{
                                    height: '3rem',
                                    width: '3rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    boxShadow: '-7px -7px 17px rgba(255, 255, 255, 0.6), 7px 7px 17px rgba(70, 70, 70, 0.15)',
                                    textDecoration: 'none',
                                }}
                            >
                                <img className="linkedin-profile-pic" src={linkedinPlaceholder} alt="LinkedIn Profile Picture" style={{ height: '4rem', width: '4rem', borderRadius: '50%' }} />
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                        ) : (
                            <span className="card-footer_social-placeholder" style={{ fontStyle: 'italic', color: '#707174', fontSize: '1rem' }}>
                                LinkedIn Profile
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <button
                onClick={handleDownloadPdf}
                style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    textAlign: 'center',
                }}
            >
                Download as PDF
            </button>
        </div>
    );
}

export default Card;
