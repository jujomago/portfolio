import React from 'react';
import styles from '../styles/ResumeModal.module.css';

interface MediaModalProps {
    isOpen: boolean;
    onClose: () => void;
    fileUrl: string;
    title: string;
    type?: 'pdf' | 'image';
    showDownload?: boolean;
}

const MediaModal: React.FC<MediaModalProps> = ({
    isOpen,
    onClose,
    fileUrl,
    title,
    type = 'pdf',
    showDownload = true
}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h3>{title}</h3>
                    <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className={styles.modalBody}>
                    {type === 'pdf' ? (
                        <iframe
                            src={`${fileUrl}#toolbar=0`}
                            title={title}
                            className={styles.pdfViewer}
                        >
                            <p>Tu navegador no soporta iframes. <a href={fileUrl}>Descarga el archivo aquí.</a></p>
                        </iframe>
                    ) : (
                        <div className={styles.imageViewerContainer}>
                            <img src={fileUrl} alt={title} className={styles.imageViewer} />
                        </div>
                    )}
                </div>

                {showDownload && (
                    <div className={styles.modalFooter}>
                        <a href={fileUrl} download className={styles.downloadBtn}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            Download {type === 'pdf' ? 'PDF' : 'Image'}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaModal;
