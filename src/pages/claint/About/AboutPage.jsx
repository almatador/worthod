export default function About() {
    return (
        <>
            <div className="py-14 lg:py-24 relative z-0 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                    <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-red-400 mb-5 md:text-5xl md:leading-normal">
                        Control your Finances with our <span className="text-rose-50">Smart Tool</span>
                    </h1>
                    <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
                        Invest intelligently and discover a better way to manage your entire wealth easily.
                    </p>
                </div>
            </div>
            <div className="py-14 lg:py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                        <div className="img-box">
                            <img 
                                src="https://pagedone.io/asset/uploads/1702034769.png" 
                                alt="About Us" 
                                className="max-lg:mx-auto object-cover"
                            />
                        </div>
                        <div className="lg:pl-[100px] flex items-center">
                            <div className="data w-full">
                                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                                    About Us
                                </h2>
                                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    Driven by a passion for seamless user experiences, we've meticulously curated pagedone 
                                    to empower creators, designers, and developers alike. Our mission is to provide a 
                                    comprehensive toolkit, enabling you to build intuitive, beautiful interfaces that resonate 
                                    with users on every interaction.
                                </p>
                                <div className="mt-8 flex justify-center lg:justify-start">
                                    <a href="#contact" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
