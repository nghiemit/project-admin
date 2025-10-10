import { useState } from "react";
import { Link } from "react-router";
// import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";

// import Checkbox from "../form/input/Checkbox";

import { Label } from "../form/Label";
import { InputField } from "../form/input/InputField";
import Button from "../ui/button/Button";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import { validateForm } from "../../utils/validateForm";
const loginSchema = {
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
};
export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formDataSignIn, setFormDataSignIn] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataSignIn({
      ...formDataSignIn,
      [name]: value,
    });
  };
  console.log(formDataSignIn, "formDataSignIn");
  const hanldeSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("111");
    e.preventDefault();
    const { valid, errors } = validateForm(formDataSignIn, loginSchema);
    console.log(errors,'errors');
    
    setErrors(errors);
    if (!valid) return;
    try {
      console.log("Form submitted:", formDataSignIn);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Login success!");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          {/* <ChevronLeftIcon className="size-5" /> */}
          Back to dashboard NGHIEM ĐZ
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div>
            <form onSubmit={hanldeSignin}>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>

                  <InputField
                    name="email"
                    placeholder="info@gmail.com"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error-500">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <InputField
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      onChange={handleChange}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-error-500">
                    {errors.password}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <Link
                    to="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <Button className="w-full" size="sm" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Don&apos;t have an account? {""}
                <Link
                  to="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
