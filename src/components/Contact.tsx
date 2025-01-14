/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useState } from "react";
import AosComp from "./AOScomp";
import ReCAPTCHA from "react-google-recaptcha";
import { getRecaptchaSiteKey } from "@/util/utility";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });
    const [isVerified, setIsVerified] = useState(false);
    const [verfToken, setVerfToken] = useState(null);
    const recaptchaRef = useRef(null);



    async function handleCaptchaSubmission(token: any) {
        try {
            if (token) {
                setIsVerified(true);
                setVerfToken(token);
            }
        } catch (error) {
            console.error("Error verifying the captcha", error);
            setIsVerified(false);
        }
    }
    const handleChangeRecaptcha = (token: any) => {
        handleCaptchaSubmission(token);
    };

    function handleExpired() {
        setIsVerified(false);
    }




    const handleSubmit = async () => {


        if (!isVerified) {
            alert("Please verify that you are not a robot");
            return;
        }

        const resp = await fetch(
            "https://sr6snnndwchm3coypmbbf5eefy0bvcwx.lambda-url.eu-west-1.on.aws/",
            {
                method: "POST",
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phoneNumber: form.phoneNumber,

                    message: form.message,
                    recaptcha: verfToken,
                }),
            }
        );
        console.log("Response", resp);
        if (resp.status === 200) {
            alert("Message sent successfully");
        } else {
            alert("Something went wrong. Please try again later");
        }

        (recaptchaRef.current as ReCAPTCHA | null)?.reset();
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    return (
        <div id="contact" className="p-6  md:p-16 w-full">
            <div className="container mx-auto">
                <AosComp aos="fade-up">
                    <p className="text-center text-blue">Contact Us</p>
                    <h3 className="text-center text-blue mb-3 mt-3">We Would Like To Hear From You</h3>
                    <p className="text-center text-lg">Phone Number: <a href="tel:+41766723176">+41 76 672 31 76</a></p>
                    <p className="text-center text-lg">Email: <a href="mailto:info@lsconsulting.ch">info@lsconsulting.ch</a></p>
                </AosComp>
                <AosComp aos="fade-up">
                    <div className="container w-full lg:w-3/4 mx-auto mt-[2rem]">
                        <div className="py-4">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full Name*"
                                className={`p-3 w-full border placeholder:text-[#C7CDCE] nsan placeholder:nsan focus:outline-none h-[60px]`}
                            />

                        </div>
                        <div className="py-4">
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address*"
                                className={`p-3 w-full border  placeholder:text-[#C7CDCE]  nsan placeholder:nsan focus:outline-none h-[60px]`}
                            />

                        </div>
                        <div className="py-4">


                            <input
                                type="number"
                                name="phoneNumber"
                                value={form.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number*"
                                className={`p-3 w-full border placeholder:text-[#C7CDCE]  nsan placeholder:nsan focus:outline-none h-[60px]`}
                            />
                        </div>



                        <div className="py-4">
                            <textarea
                                rows={12}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Message*"
                                className={`p-3 w-full border placeholder:text-[#C7CDCE]  nsan placeholder:nsan focus:outline-none h-[300px] max-h-[500px] overflow-auto resize-y`}
                            ></textarea>

                        </div>
                        <div
                            className="captcha"
                            style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}
                        >

                            <ReCAPTCHA
                                sitekey={getRecaptchaSiteKey()}
                                ref={recaptchaRef}
                                onChange={handleChangeRecaptcha}
                                onExpired={handleExpired}
                            />
                        </div>
                        <div className="pt-4 pb-0">
                            <button

                                className="btn-prm mb-[50px]"
                                onClick={handleSubmit}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </AosComp>
            </div>
        </div>
    );
};

export default Contact;