'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        message: '',
    });
    const [agree, setAgree] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!agree) {
            setStatus('You must agree to the terms.');
            return;
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData }),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', surname: '', email: '', phoneNumber: '', message: '' });
                setAgree(false);

                // Show Bootstrap modal
                const modal = new (window as any).bootstrap.Modal(document.getElementById('modalSuccess'));
                modal.show();
            } else {
                setStatus(`Failed: ${result.error || 'Something went wrong.'}`);
            }
        } catch (error) {
            setStatus('Error sending message.');
        }
    };

    return (
        <>
            <div className="page-frame bg-pale-primary">
                <div className="content-wrapper">
                    <section className="wrapper bg-gray">
                        <div className="container py-4 py-md-16">
                            <div className="row">
                                {/* Left column: Form */}
                                <div className="col-lg-8">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row gx-4">
                                            <div className="col-md-6 mb-3">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="First Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input
                                                    type="text"
                                                    name="surname"
                                                    placeholder="Last Name"
                                                    value={formData.surname}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input
                                                    type="text"
                                                    name="phoneNumber"
                                                    placeholder="Phone Number"
                                                    value={formData.phoneNumber}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <textarea
                                                    name="message"
                                                    placeholder="Your message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    style={{ height: 150 }}
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="col-12 mb-3 form-check">
                                                <input
                                                    type="checkbox"
                                                    checked={agree}
                                                    onChange={() => setAgree(!agree)}
                                                    className="form-check-input"
                                                    id="agreeCheck"
                                                />
                                                <label className="form-check-label" htmlFor="agreeCheck">
                                                    I agree to terms and policy
                                                </label>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <button type="submit" className="btn btn-primary rounded-pill">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                        {status && <p className="mt-3 text-info">{status}</p>}
                                    </form>
                                </div>

                                {/* Right column: Contact Info */}
                                <div className="col-lg-4">
                                    <div className="d-flex flex-row mb-4">
                                        <div className="icon text-primary fs-28 me-4 mt-n1">
                                            <i className="uil uil-location-pin-alt"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Address</h5>
                                            <address>
                                                Moonshine St. 14/05 Light City, London, United Kingdom
                                            </address>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mb-4">
                                        <div className="icon text-primary fs-28 me-4 mt-n1">
                                            <i className="uil uil-phone-volume"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">Phone</h5>
                                            <p>
                                                00 (123) 456 78 90 <br />
                                                00 (987) 654 32 10
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="icon text-primary fs-28 me-4 mt-n1">
                                            <i className="uil uil-envelope"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1">E-mail</h5>
                                            <p className="mb-0">
                                                <a href="mailto:sandbox@email.com" className="text-body">
                                                    sandbox@email.com
                                                </a>
                                            </p>
                                            <p>
                                                <a href="mailto:help@sandbox.com" className="text-body">
                                                    help@sandbox.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div
                className="modal fade modal-bottom-center"
                id="modalSuccess"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-body p-6">
                            <div className="row">
                                <div className="col-md-12 col-lg-8 mb-4 mb-lg-0 my-auto align-items-center">
                                    <h4 className="mb-2">Message Sent!</h4>
                                    <p className="mb-0">
                                        Your contact form has been submitted successfully. We'll get back to you soon.
                                    </p>
                                </div>
                                <div className="col-md-5 col-lg-4 text-lg-end my-auto">
                                    <button
                                        type="button"
                                        className="btn btn-primary rounded-pill"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        I Understand
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
