import React, { useState } from "react";


function Login(props) {

    const [isLogin, setIsLogin] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    function handleLoginButton() {
        setIsLogin(true);
    }

    function handleLoginClose() {
        setIsLogin(false);
    }

    function handleResetButton() {
        setIsReset(true);
        setIsLogin(false);
    }

    function handleResetClose() {
        setIsReset(false);
    }

    function handleCombinedClick() {
        handleLoginButton();
        handleResetClose();
    }

    function handleRegisterButton() {
        setIsRegister(true);
        setIsLogin(false);
    }

    function handleRegisterClose() {
        setIsRegister(false);
    }

    function handleCombinedRegisterClick() {
        handleLoginButton();
        handleRegisterClose();
    }
    

    return (
        <>
            <div>
                <button onClick={handleLoginButton}>
                    <img src="/img/login.svg" alt="Login" />
                </button>
                {isLogin && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white  p-6  rounded-md shadow-lg w-1/2">
                            <div className="flex justify-between items-center my-3">
                                <h2 className="text-4xl">Log in</h2>
                                <button
                                    onClick={handleLoginClose}
                                    className=""
                                >
                                    <img className="w-10" src="/img/close.svg" alt="" />
                                </button>
                            </div>
                            <div className="w-full h-full my-5 pt-5">
                                <input className="w-full h-full p-2 border border-gray-300 rounded" type="text" placeholder="Email" required />
                            </div>
                            <div className="w-full h-full my-5 ">
                                <input className="w-full h-full p-2 border border-gray-300 rounded" type="text" placeholder="PassWord" required />
                            </div>
                            <div className="w-full h-full my-5 ">
                                <button className="underline" onClick={handleResetButton}>Forgot your password?</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="w-full">
                                    <button className="w-full h-11 text-white underline bg-black rounded-md">Login</button>
                                </div>
                                <div className="w-full text-center">
                                    <button className="underline " onClick={handleRegisterButton}>New customer? Create your account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {isReset && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white  p-6  rounded-md shadow-lg w-1/2">

                            <div className="flex justify-between items-center my-3">
                                <h2 className="text-3xl">
                                    Reset your password</h2>
                                <button
                                    onClick={handleResetClose}
                                    className=""
                                >
                                    <img className="w-10" src="/img/close.svg" alt="" />
                                </button>
                            </div>
                            <div className="mt-7">
                                <p className="text-gray-600">
                                    Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails
                                </p>
                            </div>

                            <div className="w-full h-full my-5 pt-5">
                                <input className="w-full h-full p-2 border border-gray-300 rounded" type="text" placeholder="Email" required />
                            </div>

                            <div className="w-full h-full my-5 ">
                                <button className="underline" onClick={handleCombinedClick}>Cancel</button>
                            </div>

                            <div className="w-full h-11">
                                <button className="w-full h-full text-white underline bg-black rounded-md">Reset Password</button>
                            </div>

                        </div>
                    </div>
                )}

                {isRegister && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white  p-6  rounded-md shadow-lg w-1/2">
                            <div className="flex justify-between items-center my-3">
                                <h2 className="text-4xl">Register</h2>
                                <button
                                    onClick={handleRegisterClose}
                                    className=""
                                >
                                    <img className="w-10" src="/img/close.svg" alt="" />
                                </button>
                            </div>
                            <div className="w-full h-full my-5 pt-5">
                                <input className="w-full h-full p-2 border border-gray-300 rounded" type="text" placeholder="FirstName" required />
                            </div>
                            <div className="w-full h-full my-5 ">
                                <input className="w-full h-full p-2 border border-gray-300 rounded" type="text" placeholder="LastName" required />
                            </div>
                            <div className="w-full h-full my-5 ">
                                <input className="w-full h-full p-2 border border-gray-300 rounded" type="text" placeholder="Email" required />
                            </div>
                            <div className="w-full h-full my-5 ">
                                <input className="w-full h-full p-2 border border-gray-300 rounded" type="text" placeholder="PassWord" required />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="w-full">
                                    <button className="w-full h-11 text-white underline bg-black rounded-md">Register</button>
                                </div>
                                <div className="w-full text-center">
                                    <button className="underline " onClick={handleCombinedRegisterClick}>Already have an account? Log in here</button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    );
}

export default Login;