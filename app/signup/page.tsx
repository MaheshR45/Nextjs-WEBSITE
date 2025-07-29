'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [status, setStatus] = useState('');
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: '' }));
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.password.trim()) newErrors.password = 'Password is required';

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus('');
            return;
        }

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus('Registration successful!');
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                setErrors({});
                  router.push('/signin');
            } else {
                setStatus(result.error || 'Registration failed.');
            }
        } catch (err) {
            setStatus('Server error. Please try again.');
        }
    };

    return (
        <section className="wrapper bg-light">
            <div className="container py-10 py-md-14">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="modal-content text-center p-5 shadow-lg">
                            <div className="modal-body">
                                <h2 className="mb-3 text-start">Sign up to Sandbox</h2>
                                <p className="lead mb-6 text-start">Registration takes less than a minute.</p>

                                <form className="text-start mb-3" onSubmit={handleSubmit} noValidate>
                                    <div className="form-floating mb-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="name">Name</label>
                                        {errors.name && <small className="text-danger">{errors.name}</small>}
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="email">Email</label>
                                        {errors.email && <small className="text-danger">{errors.email}</small>}
                                    </div>

                                    <div className="form-floating password-field mb-4">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            id="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <span className="password-toggle"><i className="uil uil-eye"></i></span>
                                        <label htmlFor="password">Password</label>
                                        {errors.password && <small className="text-danger">{errors.password}</small>}
                                    </div>

                                    <div className="form-floating password-field mb-4">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            id="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        <span className="password-toggle"><i className="uil uil-eye"></i></span>
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        {errors.confirmPassword && (
                                            <small className="text-danger">{errors.confirmPassword}</small>
                                        )}
                                    </div>

                                    <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
                                        Sign Up
                                    </button>
                                </form>

                                {status && <p className={`mb-3 ${status.includes('successful') ? 'text-success' : 'text-danger'}`}>{status}</p>}

                                <p className="mb-0">
                                    Already have an account? <a href="/signin" className="hover">Sign in</a>
                                </p>

                                <div className="divider-icon my-4">or</div>

                                <nav className="nav social justify-content-center text-center">
                                    <a href="#" className="btn btn-circle btn-sm btn-google"><i className="uil uil-google"></i></a>
                                    <a href="#" className="btn btn-circle btn-sm btn-facebook-f"><i className="uil uil-facebook-f"></i></a>
                                    <a href="#" className="btn btn-circle btn-sm btn-twitter"><i className="uil uil-twitter"></i></a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
