"use client";

import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/shared/pages/login-form/login-form.module.scss";
import Input from "@/shared/components/shared/input/input";
import Button from "@/shared/components/shared/button/button";
import { login } from "@/shared/utils/firebase/auth";
import Loader from "@/shared/components/shared/loader/loader";

function LoginForm() {
    const [isLoading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserDetails((preState) => ({
            ...preState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        setLoading(true);
        try {
            event.preventDefault();
            const response = await login(userDetails);
            if (response) {
                toast.success("Login successfully");
                setLoading(false);
            }
        } catch (err: any) {
            setLoading(false);
            toast.error(err?.message);
        }
    };

    return (
        <form className={styles.container}>
            <h4 className={styles.heading}>Login</h4>
            <div className={styles.field}>
                <Input
                    name="email"
                    label="Email"
                    placeholder="xyz@gmail.com"
                    type="email"
                    value={userDetails.email}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <Input
                    name="password"
                    label="Password"
                    placeholder="*****"
                    type="password"
                    value={userDetails.password}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.btnContainer}>
                <Button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? (
                        <span
                            style={{
                                display: "flex",
                            }}
                        >
                            <Loader /> <span>Loading...</span>
                        </span>
                    ) : (
                        "Login"
                    )}
                </Button>
            </div>
            <Link href="/signup" className={styles.signupText}>
                Dont have an account?
            </Link>
        </form>
    );
}

export default LoginForm;
