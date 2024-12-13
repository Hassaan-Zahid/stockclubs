import styles from './style.module.css';

const SignUp = () => {
    return (
        <div className={`justify-center hidden bgPrimary md:flex ${styles.signUpBG}`}>
            <div className="box-content flex max-w-[1116px] flex-row flex-wrap px-5 py-[70px]">
                <div data-aos='fade-right' className="h-[440px] w-[395px] flex-1 rounded-[50px] bg-white p-[25px]">
                    <div
                        className="flex h-full flex-col items-center justify-center gap-[21px] rounded-[25px] bgPrimary p-6">
                        <img
                            src="/barcode.svg"
                            alt=""
                            className="h-[220px] w-[220px] align-middle"
                        />
                        <p className="text-[24px] font-medium leading-[28.13px] text-white">Sign Up</p>
                    </div>
                </div>
                <div data-aos='fade-left'
                    className="relative w-[100%] flex-1 pl-[56px]"
                >
                    <div
                        className="flex items-center justify-center rounded-[25px] bg-white text-[25px] h-[341px] w-[665px]">
                        <img
                            src="/signup_p1.svg"
                            className="absolute bottom-0 -left-[34px] h-[380px] w-[266px]"
                            alt="Signup image"
                        />
                        <p className="mr-[50px] pr-[20px] text-left font-roboto text-[20px] leading-[28px] textPrimary2 ml-auto w-[340px]">
                            <span className="font-bold">Sign up today</span>
                            <span className="text-[18px]">
                  and manage your portfolio like a pro with personalized assistant and access to
                  a trusted tech community of 1,400 members who connected $200M+ of total assets.
                </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
