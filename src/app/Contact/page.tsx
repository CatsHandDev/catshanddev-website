'use client'
import React, { useState, useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { MdOutlineMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import styles from './contact.module.scss';
import { Header } from '@/components/Header/Header';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setShowModal(false);
        setIsSubmitted(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirmSubmit = async () => {
    setIsLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send email');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Sending error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send email');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>
            Get in Touch
          </h1>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <FaRegUser size={20} className={styles.labelIcon} />
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={styles.input}
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <CiMail size={20} className={styles.labelIcon} />
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={styles.input}
                  placeholder="john@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <MdOutlineMessage size={20} className={styles.labelIcon} />
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder="Tell us about your message..."
                />
              </div>

              <button
                type="submit"
                className={`${styles.button} ${styles.submitButton}`}
              >
                <IoIosSend size={20} />
                Confirm Details
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button
              onClick={handleCloseModal}
              className={`${styles.button} ${styles.closeButton}`}
            >
              <FaXmark size={24} />
            </button>

            {!isSubmitted ? (
              <>
                <h2 className={styles.modalTitle}>Confirm Your Details</h2>

                <div className={styles.detailsContainer}>
                  <div className={styles.detailGroup}>
                    <h3 className={styles.detailLabel}>Name</h3>
                    <p className={styles.detailText}>{formData.name}</p>
                  </div>
                  <div className={styles.detailGroup}>
                    <h3 className={styles.detailLabel}>Email</h3>
                    <p className={styles.detailText}>{formData.email}</p>
                  </div>
                  <div className={styles.detailGroup}>
                    <h3 className={styles.detailLabel}>Message</h3>
                    <p className={styles.detailText}>{formData.message}</p>
                  </div>
                </div>

                {submitError && (
                  <p className={styles.errorMessage}>{submitError}</p>
                )}

                <div className={styles.modalButtons}>
                  <button
                    onClick={handleCloseModal}
                    className={`${styles.button} ${styles.editButton}`}
                    disabled={isLoading}
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleConfirmSubmit}
                    className={`${styles.button} ${styles.confirmButton}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      'Sending...'
                    ) : (
                      <>
                        <IoIosSend size={20} />
                        Submit
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.submittedContent}>
                <h2 className={styles.modalTitle}>Thank you for your message!</h2>
                <p className={styles.submittedText}>We will get back to you soon.</p>
                <button
                  onClick={handleCloseModal}
                  className={`${styles.button} ${styles.confirmButton}`}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;