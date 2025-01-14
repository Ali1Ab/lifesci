import Image from "next/image";
import Link from "next/link";
import AosComp from "./AOScomp";


const Expertree = () => {
    return (
        <div id="expertree" className="blue-bg w-full p-6 md:p-16 pb-12 ">
            <div className="container mx-auto">
                <div className="grid grid-cols-3  gap-4">
                    <div className="col-span-3 md:col-span-2">
                        <AosComp aos="fade-up">
                            <p className="text-center md:text-left text-yellow">Expertree</p>
                            <h3 className="text-white mb-12 mt-3 text-center md:text-left">Meet Our New Platform</h3>

                            <div className="col-span-1 flex items-center md:hidden">
                                <AosComp aos="zoom-in">
                                    <Image src="/imgs/expertree.png" alt="Expertree Logo" width={400} height={200} />
                                </AosComp>
                            </div>

                            <p className="text-xl text-white my-12  w-full  md:w-3/4">Our new platform offers a varitey of services. It allows you to digitally hire the perfect consultants to proper your business.
                                All hiring procedures are automated. And the best part of it is owr powerful searching engine that will help you find consultant tailored to your specific needs.</p>
                            <Link href="https://expertree.com" className="btn-prm px-4 py-2 rounded-lg mt-4">Visit Expertree</Link>
                        </AosComp>
                    </div>
                    <div className="col-span-1  hidden md:flex items-center">
                        <AosComp aos="zoom-in">
                            <Image src="/imgs/expertree.png" alt="Expertree Logo" width={400} height={200} />
                        </AosComp>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Expertree;