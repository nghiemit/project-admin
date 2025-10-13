import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "../form/Label";
import { InputField } from "../form/input/InputField";
import type { SignUpFormData } from "../../types/Authen";
import { validateForm } from "../../utils/validateForm";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import { authService } from "../../services/authService";
import { toast } from "react-toastify";
const signupSchema = {
  email: [
    { required: true, message: "Email is required" },
    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" },
  ],
  password: [
    { required: true, message: "Password is required" },
    { minLength: 6, message: "Password must be at least 6 characters" },
    {
      pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/,
      message: "Ít nhất 1 chữ hoa, 1 ký tự đặc biệt,",
    },
  ],
  phone: [
    { required: true, message: "Phone is required" },
    {
      pattern: /^(\d{3})(\d{3})(\d{4})$/,
    },
  ],
  name: [{ required: true, message: "Name is required" }],
  userName: [{ required: true, message: "UserName is required" }],
};
export const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [form, setForm] = useState<SignUpFormData>({
    email: "",
    userName: "",
    password: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    userName: "",
    password: "",
    name: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { valid, errors } = validateForm(form, signupSchema);
    setErrors(errors);
    if (!valid) return;
        setIsLoading(true);
    try {
      const res = await authService.signup(form);
      if (res.data.success) {
        toast.success("Đăng ký thành công", {
          autoClose: 2000,
          position: "top-right",
        });
        navigate("/signin")
      } else {
        toast.warning(res.data.error, {
          autoClose: 2000,
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Đăng ký thất bại.")
    } finally {
       setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">

      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm sm:text-title-md">
              Sign Up
            </h1>
            <p className="text-sm text-gray-500">
              Enter your email and password to sign up!
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <Label htmlFor="fname">
                    User Name<span className="text-error-500">*</span>
                  </Label>
                  <InputField
                    type="text"
                    id="fname"
                    name="userName"
                    placeholder="Enter your user name"
                    value={form.userName}
                    onChange={handleChange}
                  />
                  {errors.userName && (
                    <p className="mt-1 text-sm text-error-500">
                      {errors.userName}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-1">
                  <Label htmlFor="fname">
                    Name<span className="text-error-500">*</span>
                  </Label>
                  <InputField
                    type="text"
                    id="fname"
                    name="name"
                    placeholder="Enter your  name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error-500">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <Label>
                    Phone<span className="text-error-500">*</span>
                  </Label>
                  <InputField
                    type="number"
                    name="phone"
                    placeholder="Enter your phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-error-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-1">
                  <Label>
                    Email<span className="text-error-500">*</span>
                  </Label>
                  <InputField
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label>
                  Password<span className="text-error-500">*</span>
                </Label>
                <div className="relative">
                  <InputField
                    name="password"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="fill-gray-500 size-5" />
                    ) : (
                      <EyeCloseIcon className="fill-gray-500 size-5" />
                    )}
                  </span>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-error-500">
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <button
                  disabled={isLoading}
                  className={`flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg shadow-theme-xs 
        ${
          isLoading
            ? "bg-brand-400 cursor-not-allowed"
            : "bg-brand-500 hover:bg-brand-600"
        }
      `}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="w-4 h-4 mr-2 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                        />
                      </svg>
                      Đang xử lý...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </div>
          </form>

          <div className="mt-5">
            <p className="text-sm font-normal text-center text-gray-700 sm:text-start">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-brand-500 hover:text-brand-600"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
