import React from "react";
import FooterSocialMedia from "./FooterSocialMedia";

function FooterSocialMediaContent(){

    return(
        <>
            <div className="flex items-center gap-2 mt-4">
                <FooterSocialMedia img="/img/facebook-icon-logo-svgrepo-com.svg" alt="" link=""></FooterSocialMedia>
                <FooterSocialMedia img="/img/black-instagram-icon.svg" alt="" link=""></FooterSocialMedia>
                <FooterSocialMedia img="/img/x-social-media-black-icon.svg" alt="" link=""></FooterSocialMedia>
                <FooterSocialMedia img="/img/tiktok-icon.svg" alt="" link=""></FooterSocialMedia>
                <FooterSocialMedia img="/img/pinterest-round-icon.svg" alt="" link=""></FooterSocialMedia>
            </div>
        </>
    )
}

export default FooterSocialMediaContent;