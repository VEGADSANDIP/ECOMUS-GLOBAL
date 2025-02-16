import React from "react";
import Logo from "../Navbar/Logo";
import FooterContainerAddressLink from "./FooterContainerAddressLink";
import FooterSocialMediaContent from "./FooterSocialMediaContent";
import FooterContainerHeader from "./FooterContainerHeader";
import FooterContainerLink from "./FooterContainerLink";
import FooterContainerCard from "./FooterContainerCard";



function FooterContainer() {

    return (
        <>
            <section className="container max-w-[95%] mx-auto mt-14">
                <div className="grid grid-cols-4 border border-1 py-7 border-e-0 border-s-0">
                    <div>
                        <div className="py-5">
                            <Logo></Logo>
                        </div>
                        <div className="">

                                <address className="">
                                    <p className="my-2">Address: 1234 Fashion Street, Suite 567,New York, NY</p>
                                    <p className="my-2">Email: <a className="font-semibold" href="mailto:info@fashionshop.com">info@fashionshop.com</a></p>
                                    <p className="my-2">Phone: <a className="font-semibold" href="tel:(212)555-1234">(212)555-1234</a></p>
                                </address>

                        </div>
                        <div className="mt-4">
                            <FooterContainerAddressLink text="Get direction" img="/img/North East.svg"></FooterContainerAddressLink>
                        </div>
                        <div className="">
                            <FooterSocialMediaContent></FooterSocialMediaContent>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <FooterContainerHeader heading="Help"></FooterContainerHeader>
                        </div>
                        <div>
                            <FooterContainerLink link="Privacy Policy"></FooterContainerLink>
                            <FooterContainerLink link="Returns + Exchanges"></FooterContainerLink>
                            <FooterContainerLink link="Shipping"></FooterContainerLink>
                            <FooterContainerLink link="Terms & Conditions"></FooterContainerLink>
                            <FooterContainerLink link="FAQ’s"></FooterContainerLink>
                            <FooterContainerLink link="Compare"></FooterContainerLink>
                            <FooterContainerLink link="My Wishlist"></FooterContainerLink>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <FooterContainerHeader heading="Useful Links"></FooterContainerHeader>
                        </div>
                        <div>
                            <FooterContainerLink link="Our Story"></FooterContainerLink>
                            <FooterContainerLink link="Visit Our Store"></FooterContainerLink>
                            <FooterContainerLink link="Contact Us"></FooterContainerLink>
                            <FooterContainerLink link="About Us"></FooterContainerLink>
                            <FooterContainerLink link="Account"></FooterContainerLink>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <FooterContainerHeader heading="Sign Up for Email"></FooterContainerHeader>
                        </div>
                        <div>
                            <p>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
                        </div>
                        {/* <div className="flex justify-between items-center border border-1 p-2 rounded-lg mt-5">
                            <input className="h-10  outline-none border-0 " type="text" placeholder="Enter the Email Address" />
                            <button className="flex justify-center items-center bg-black text-white w-full h-10 rounded-lg">Subscribe <img className="filter invert" src="/img/North East.svg" alt="" /></button>
                        </div> */}

                        <div className="mt-5">
                            <select className="border-0" name="country" id="">
                                <option value="mercedes">USA</option>
                                <option value="volvo">France</option>
                                <option value="saab">Germany</option>
                                <option value="audi">Vietnam</option>
                            </select>
                            <select className="border-0" name="country" id="">
                                <option value="mercedes">English</option>
                                <option value="volvo">العربية</option>
                                <option value="saab">简体中文</option>
                                <option value="audi">اردو</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="py-7 flex justify-between items-center">
                    <div className="flex justify-start">
                        <p>© 2025 Ecomus . All rights reserved.</p>
                    </div>
                    <div className="flex justify-end gap-3">
                        <FooterContainerCard img="/img/img-1.png" alt=" " link=""></FooterContainerCard>
                        <FooterContainerCard img="/img/img-2.png" alt=" " link=""></FooterContainerCard>
                        <FooterContainerCard img="/img/img-3.png" alt=" " link=""></FooterContainerCard>
                        <FooterContainerCard img="/img/img-4.png" alt=" " link=""></FooterContainerCard>
                        <FooterContainerCard img="/img/visa.png" alt=" " link=""></FooterContainerCard>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FooterContainer;