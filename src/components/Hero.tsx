import AosComp from "./AOScomp";


const Hero = () => {


    return (
        <div className="home-bnr p-6 md:p-16 h-[546px] md:h-[603px] lg-[671px] xl-[700px] 2xl:h-[750px] flex items-center">
            <div className="container mx-auto">
                <AosComp aos="fade-up">
                    <h1 className="text-yellow lg:text-[100px] py-6">LifeSci Consulting</h1>
                    <p className="text-white mb-[40px]">Your Path to Excellence in Life Science Solutions</p>
                    <a className="btn-prm mt-12" href="#contact">Get in Touch</a>
                </AosComp>

            </div>

        </div>
    );
};

export default Hero;