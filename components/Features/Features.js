import styles from './style.module.css';

const Feature = () => {
    return (
        <>
            <div
                className={`relative hidden justify-center overflow-hidden bg-[#3994E9] p-5 py-[154px] md:flex ${styles.featureBG}`}>
                <div
                    className="flex w-full items-center justify-between rounded-[25px] bg-white max-h-[313px] max-w-[1116px]">
                    <p data-aos='fade-right'
                        className="textPrimary2 ml-[50px] mr-[80px] leading-[28px] w-[340px]">
                        <span className="text-[20px] font-[700]">Connect your brokerage</span>
                        <span className="text-[18px] font-[500]">
            accounts and get access to trading ideas, aggregated stats, and discussions in your tech
            investing community right away.
          </span>
                    </p>
                    <div data-aos='fade-up' data-aos-delay="50" className="relative flex justify-center h-[480px] w-[642.56px]">
                        <img
                            src="/amazonians_group_card.png"
                            alt=""
                            className="absolute w-full transition ease-in-out duration-500 max-w-[595px] right-[35px] top-0 hover:z-50 hover:-rotate-[10deg] hover:!scale-125"
                        />
                        <img
                            src="/googlers_group_card.png"
                            alt=""
                            className="absolute w-full transition ease-in-out duration-500 max-w-[595px] right-[90px] top-[44px] hover:z-50 hover:rotate-6 hover:!scale-125"
                        />
                        <img
                            src="/stockclubs_community_group_card.png"
                            alt=""
                            className="absolute w-full transition ease-in-out duration-500 max-w-[595px] bottom-0 right-[78px] hover:-rotate-6 hover:!scale-125"
                        />
                    </div>
                </div>
            </div>

            <div className="m-auto flex min-w-[390px] items-center bg-[#3994E9] py-[30px] md:hidden"
                 // style="background-image: url(&quot;/assets/background_brokerage_mob-84aa667b.png&quot;); background-size: cover;"
            >
                <div className="mx-auto flex w-[350px] flex-col items-center bg-white py-[30px]"
                     // style="border-radius: 25px;"
                >
                    <div className="relative mt-[20px] h-[174px] w-[233px]"><img
                        src="/amazonians_group_card.png" alt="" className="absolute bottom-[60px]"/><img
                        src="/googlers_group_card.png" alt="" className="absolute bottom-[55px]"/><img
                        src="/stockclubs_community_group_card.png" alt=""
                        className="absolute bottom-[10px]"/></div>
                    <div className="w-[290px] text-center text-[#127398]"><span
                        className="text-[20px] font-[700] leading-[24px]">Connect your brokerage accounts</span> <span
                        className="text-[17px] font-[500] leading-[24px]">and get access to trading ideas, aggregated stats and discussions in your tech investing community right away.</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;
