import { Pill, Stethoscope, Sparkles, TestTube, Atom, Wheat } from "lucide-react";
import AosComp from "./AOScomp";


const Services = () => {


    return (
        <div id="industries" className="p-6 md:p-16 w-full">
            <div className="container mx-auto">
                <AosComp aos="fade-up">
                    <p className="text-center text-blue">Industries</p>
                    <h3 className="text-center text-blue mb-12 mt-3">What sectors do we serve?</h3>
                </AosComp>
                <AosComp aos="fade-up">
                    <div className="grid grid-cols-3  gap-4">

                        <div className="col-span-3 lg:col-span-1" >
                            <div className="bg-[#f6f6f6] rounded-lg p-8 min-h-[320px]">
                                <Stethoscope className="text-blue-600 w-12 h-12" />
                                <h4 className=" font-bold my-4 text-2xl">Medical Devices</h4>
                                <p className="text-lg">We provide cutting-edge regulatory consulting services that ensure the safety, efficacy, and compliance of innovative medical technologies.</p>
                            </div>
                        </div>

                        <div className="col-span-3 lg:col-span-1" >
                            <div className="bg-[#f6f6f6] rounded-lg p-8 min-h-[320px]">
                                <Pill className="text-purple-600 w-12 h-12" />
                                <h4 className=" font-bold my-4 text-2xl">Pharmaceutical Industry</h4>
                                <p className="text-lg">We strive to navigate the complex regulatory landscape to expedite drug development, ensure regulatory compliance, and facilitate access to essential medicines for patients in need..</p>
                            </div>
                        </div>

                        <div className="col-span-3 lg:col-span-1" >
                            <div className="bg-[#f6f6f6] rounded-lg p-8 min-h-[320px]">
                                <Sparkles className="text-pink-500 w-12 h-12" />
                                <h4 className="font-bold my-4 text-2xl">Cosmetics</h4>
                                <p className="text-lg">With expertise in regulations and industry standards, we offer customized consulting for cosmetics companies. From product development to market strategies, our guidance ensures compliance and success in this dynamic industry.</p>
                            </div>
                        </div>


                        <div className="col-span-3 lg:col-span-1" >
                            <div className="bg-[#f6f6f6] rounded-lg p-8 min-h-[320px]">
                                <TestTube className="text-green-600 w-12 h-12" />
                                <h4 className="font-bold my-4 text-2xl">Biotechnology</h4>
                                <p className="text-lg">We provide strategic regulatory guidance to facilitate the development, approval, and commercialization of biotechnological innovations, thereby advancing healthcare, agriculture, and environmental sustainability.</p>
                            </div>
                        </div>



                        <div className="col-span-3 lg:col-span-1" >
                            <div className="bg-[#f6f6f6] rounded-lg p-8 min-h-[320px]" >
                                <Atom className="text-red-500 w-12 h-12" />
                                <h4 className="font-bold my-4 text-2xl">Chemistry</h4>
                                <p className="text-lg">We provide comprehensive regulatory consulting services to navigate the intricate regulatory landscape, foster responsible chemical stewardship, and promote innovation in the chemical industry.</p>
                            </div>
                        </div>


                        <div className="col-span-3 lg:col-span-1" >
                            <div className="bg-[#f6f6f6] rounded-lg p-8 min-h-[320px]">
                                <Wheat className="text-amber-600 w-12 h-12" />
                                <h4 className=" font-bold  my-4 text-2xl">Agri-food</h4>
                                <p className="text-lg">We strive to navigate the complex regulatory landscape to expedite drug development, ensure regulatory compliance, and facilitate access to essential medicines for patients in need..</p>
                            </div>
                        </div>

                    </div>
                </AosComp>
            </div>
        </div>
    );
};

export default Services;