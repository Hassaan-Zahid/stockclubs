import styles from './style.module.css';
import {useState} from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="top-0 z-[1000] !h-[64px] w-full bg-white px-[30px] py-[5px] hidden md:block">
                <div className="inset-x-0 mx-auto mt-5 flex !max-w-[1860px] items-center justify-between">
                    <div className={styles.logoSection}>
                        <img src="/Logo.svg" alt="logo" className="mx-[9px] h-[50px] w-[50px]"/>
                        <span className="text-[36px] font-[600] leading-[43px] text-[#008ab5]">
                    <span className="textPrimary">Stock</span>Clubs</span>
                    </div>
                    <div
                        className="mr-10 flex cursor-pointer gap-[34px] text-center text-[20px] font-[700] leading-[24px] textPrimary">
                        <div className="textPrimary">App</div>
                        <div className="textPrimary">Security</div>
                        <div className="textPrimary">Contact</div>
                    </div>
                </div>
            </header>

            <div
                className="sticky top-[-3px] z-10 flex min-w-[390px] justify-end bg-white pb-[12.5px] pr-[20px] pt-[20px] md:hidden">
                <img
                    src="/menu_icon.svg"
                    alt="Menu"
                    className="cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                {menuOpen && (
                    <div className="textPrimary absolute right-[20px] top-12 rounded-[10px] border-2 bg-white p-4">
                        <div className="mb-2 h-[30px] w-[80px] text-lg font-bold">App</div>
                        <div className="mb-2 h-[30px] w-[80px] text-lg font-bold">Security</div>
                        <div className="mb-2 h-[30px] w-[80px] text-lg font-bold">Contact</div>
                    </div>
                )}
            </div>
            <div id="appMobile" className="mx-auto w-[390px] md:hidden">
                <div className="mx-auto flex w-[350px] flex-col gap-[35px]">
                    <div className="flex flex-col gap-[5px] text-center">
                        <img src="/Logo.svg" alt="" className="mx-auto"/><span
                        className="font-sfPro text-[20px] font-[600] leading-[24px] text-[#008ab5]"><span
                        className="textPrimary text-[20px] font-[600] leading-[24px]">Stock</span>Clubs</span></div>
                    <div className="text-center"><h1 className="textPrimary text-[30px] font-[600] leading-[35px]">FAANG
                        INVESTING COMMUNITY</h1><p
                        className="pt-[35px] text-[19px] font-[500] leading-[24px] text-[#127398]">We help people
                        working in
                        BigTech make better financial decisions with the data and insights provided by AI</p></div>
                    <div className="flex flex-col gap-[20px]"><a
                        href="javascript:void();" target="_blank"
                        rel="noreferrer noopenner">
                        <object data="/apple_store_button.svg" type="image/svg+xml"
                                className="pointer-events-none mx-auto max-w-[210px]"></object>
                    </a><a href="javascript:void();" target="_blank"
                           rel="noreferrer noopenner">
                        <object data="/google_play_button.svg" type="image/svg+xml"
                                className="pointer-events-none mx-auto max-w-[210px]"></object>
                    </a></div>
                    <div className="mx-auto w-[273px] pb-[48px] text-center"><span
                        className="text-[20px] font-[700] leading-[24px] text-[#127398]">Sign up today</span> <span
                        className="text-[17px] font-[400] leading-[24px] text-[#127398]">and manage your portfolio like a pro with personalized assistant and access to a trusted tech community of 1,400 members who connected $200M+ of total assets.</span>
                    </div>
                </div>
            </div>
        </>

    )
}


export default Header;
