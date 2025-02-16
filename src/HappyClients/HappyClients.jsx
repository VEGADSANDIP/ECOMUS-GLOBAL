import React from "react";
import HappyClientsText from "./HappyClientsText";
import HappyClientsContainer from "./HappyClientsContainer";
import CompanyLogo from "./CompanyLogo";




function HappyClients() {

    return (
        <>
            <section className="container max-w-[95%] mx-auto">
                <HappyClientsText></HappyClientsText>
                <HappyClientsContainer></HappyClientsContainer>
                <div className="my-20 max-w-[95%] mx-auto">
                    <CompanyLogo ></CompanyLogo>
                </div>
            </section>
        </>
    )
}

export default HappyClients;