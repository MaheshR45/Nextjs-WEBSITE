"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const router = useRouter();

  const handleChange = (e:any) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.id]: '' }));
  };

  const validate = () => {
   const newErrors: { [key: string]: string } = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('');
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Login successful!');
        router.push('/');
      } else {
        const data = await res.json();
        setStatus(data.error || 'Login failed');
      }
    } catch (error) {
      setStatus('Something went wrong');
    }
  };

  const handleReset = async () => {
    setResetMessage('');
    if (!resetEmail || !resetPassword) {
      setResetMessage('Both fields are required');
      return;
    }
    try {
      const res = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: resetEmail, password: resetPassword })
      });
      const data = await res.json();
      if (res.ok) {
        setResetMessage('Password updated successfully!');
      } else {
        setResetMessage(data.error || 'Failed to reset password');
      }
    } catch (err) {
      setResetMessage('Server error');
    }
  };

  return (
    <div className="container py-10">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card p-4 shadow-sm border-0">
            <h2 className="mb-3">Welcome Back</h2>
            <p className="lead mb-4">Fill your email and password to sign in.</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-floating mb-4">
                <input type="email" className="form-control" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="form-floating password-field mb-4 position-relative">
                <input type={showPassword ? "text" : "password"} className="form-control" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <span className="password-toggle position-absolute top-50 end-0 translate-middle-y px-3" onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                  <i className={`uil ${showPassword ? "uil-eye-slash" : "uil-eye"}`}></i>
                </span>
                <label htmlFor="password">Password</label>
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>
              <button type="submit" className="btn btn-primary w-100 rounded-pill mb-2">Sign In</button>
            </form>
            {status && <div className={`text-${status.includes('successful') ? 'success' : 'danger'} mt-2`}>{status}</div>}
            <p className="mb-1">
              <a href="#" className="hover" data-bs-toggle="modal" data-bs-target="#resetModal">Forgot Password?</a>
            </p>
            <p>Don't have an account? <Link href="/signup" className="hover">Sign up</Link></p>
            <nav className="nav social justify-content-center">
              <a href="#" className="btn btn-circle btn-sm btn-google"><i className="uil uil-google"></i></a>
              <a href="#" className="btn btn-circle btn-sm btn-facebook-f"><i className="uil uil-facebook-f"></i></a>
              <a href="#" className="btn btn-circle btn-sm btn-twitter"><i className="uil uil-twitter"></i></a>
            </nav>
          </div>
        </div>
      </div>

      {/* Reset Password Modal */}
      <div className="modal fade" id="resetModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content text-center">
            <div className="modal-body">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <h2 className="mb-3 text-start">Reset Password</h2>
              <form className="text-start">
                <div className="form-floating mb-4">
                  <input type="email" className="form-control" placeholder="Email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} />
                  <label>Email</label>
                </div>
                <div className="form-floating mb-4">
                  <input type="password" className="form-control" placeholder="New Password" value={resetPassword} onChange={(e) => setResetPassword(e.target.value)} />
                  <label>New Password</label>
                </div>
                <button type="button" className="btn btn-primary rounded-pill w-100 mb-2" onClick={handleReset}>Update Password</button>
                {resetMessage && <small className={`text-${resetMessage.includes('successfully') ? 'success' : 'danger'}`}>{resetMessage}</small>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}