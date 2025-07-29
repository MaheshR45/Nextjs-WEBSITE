'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.id]: '' }));
  };

  const validate = () => {
  const newErrors: { email?: string; password?: string } = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
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
        router.push('/'); // Redirect to homepage
      } else {
        const data = await res.json();
        setStatus(data.error || 'Login failed');
      }
    } catch (error) {
      setStatus('Something went wrong');
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
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="form-floating password-field mb-4 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="password-toggle position-absolute top-50 end-0 translate-middle-y px-3"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                >
                  <i className={`uil ${showPassword ? "uil-eye-slash" : "uil-eye"}`}></i>
                </span>
                <label htmlFor="password">Password</label>
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <button type="submit" className="btn btn-primary w-100 rounded-pill mb-2">
                Sign In
              </button>
            </form>

            {status && (
              <div className={`text-${status.includes('successful') ? 'success' : 'danger'} mt-2`}>
                {status}
              </div>
            )}

            <p className="mb-1">
              <Link href="#" className="hover">Forgot Password?</Link>
            </p>
            <p>
              Don't have an account?{" "}
              <Link href="/signup" className="hover">
                Sign up
              </Link>
            </p>

            <nav className="nav social justify-content-center">
              <a href="#" className="btn btn-circle btn-sm btn-google">
                <i className="uil uil-google"></i>
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-facebook-f">
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-twitter">
                <i className="uil uil-twitter"></i>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
