const Hero = () => (
    <div className="w-full flex-col items-center pt-[35px] hidden md:flex">
        <div className="flex md:max-w-[863px] md:gap-20 xl:max-w-[926px] [@media(max-width:900px)]:gap-10 [@media(max-width:900px)]:px-4">
            <div className="flex flex-col justify-center gap-4 w-full md:w-[451px]">
                <h1 className="text-[40px] md:text-[54px] font-medium leading-[48px] md:leading-[64px] textPrimary">
                    FAANG INVESTING COMMUNITY
                </h1>
                <p className="text-[24px] leading-[40px] textPrimary [@media(max-width:900px)]:text-xl">
                    We help people working in BigTech make better financial decisions with the data and insights provided by AI
                </p>
            </div>
            <div
                className="flex flex-col justify-center bgPrimary rounded-[50px] p-[30px] bg-contain"
                style={{
                    backgroundImage: "url('/background_form.svg')",
                }}
            >
                <div className="flex flex-col items-center justify-center bg-white rounded-[25px] px-[20px] py-[25px] w-full md:w-[345px] h-[359px]">
                    <p className="pb-[12px] text-[28px] font-medium leading-[36px] textPrimary">Welcome Back</p>
                    <form className="w-full">
                        <div className="flex flex-col">
                            <div className="mt-3 flex flex-col justify-evenly h-12 w-full rounded-lg border borderPrimary transition-colors duration-300 ease-out bgWhite p-1.5 cursor-text">
                                <div className="flex">
                                    <div className="w-full flex items-center">
                                        <div className="flex w-full items-center justify-between">
                                            <input
                                                name="email"
                                                id=""
                                                placeholder="Email"
                                                aria-invalid="false"
                                                className="cursor-text placeholder:font-medium bg-transparent font-medium w-full transition-colors duration-300 ease-in-out placeholder-gray-300 ml-1 text-fifth focus:outline-none text-lg h-6"
                                                type="text"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 flex flex-col justify-evenly h-12 w-full rounded-lg border borderPrimary transition-colors duration-300 ease-out bgWhite p-1.5 cursor-text">
                                <div className="flex">
                                    <div className="w-full flex items-center">
                                        <div className="flex w-full items-center justify-between">
                                            <input
                                                name="password"
                                                id=""
                                                placeholder="Password"
                                                autoComplete="current-password"
                                                aria-invalid="false"
                                                className="cursor-text placeholder:font-medium bg-transparent font-medium w-full transition-colors duration-300 ease-in-out placeholder-gray-300 ml-1 text-fifth focus:outline-none text-lg h-6"
                                                type="password"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex cursor-pointer justify-end pb-[10px] text-[14px] font-medium text-[500] textPrimary pt-[26px]">
                                <button type="button">Forgot Password?</button>
                            </div>
                        </div>
                        <div className="w-full">
                            <button
                                className="box-border w-full items-center justify-center gap-2 rounded-[10px] px-5 text-[17px] font-semibold leading-5 false bgPrimary text-white h-[50px]"
                                type="submit"
                                aria-label="Log In"
                            >
                                <span>Log In</span>
                            </button>
                        </div>
                    </form>
                    <div className="flex gap-x-[25px] pt-[17px]">
                        <span className="text-[17px] font-[400] leading-[25px] text-[#127398]">Don't have an account?</span>
                        <button className="cursor-pointer text-[17px] font-[700] leading-[24px] textPrimary">Create One</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[35px] flex max-h-[241px] w-full justify-center overflow-hidden bg-gradient-to-b from-white from-[140px] to-[#00ABE1] to-[140px]">
            <img alt={"cards_with_faces"} src="/cards_with_faces.svg" className="mx-auto h-full object-center" />
        </div>
    </div>
);

export default Hero;
