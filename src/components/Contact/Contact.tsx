import React, {FC, useEffect} from 'react';
import {ContactHeader, ContactLine, ContactSection, ContactText} from "./Contact.styled";
import contactEmbed from './contactEmbed'

const Contact: FC = ({contactRef}) => {
    useEffect(()=>{
        const script = document.createElement("script");

        script.innerHTML = contactEmbed;
        script.type = 'text/javascript';
        script.id = 'aoform-script-0ea0194e-db01-4ec2-81d1-4f0f8550f840:d-0001';
        script.async = true;
        contactRef && contactRef.current && contactRef.current.appendChild(script);
    },[])

    return (
        <ContactSection ref={contactRef}>
            <ContactText>
                Register below to receive more information about Parkhouse, and to schedule a private tour. Please share
                the best way to reach you, and a member of our Sales Team will contact you soon.
            </ContactText>

            <ContactLine/>

            <ContactHeader>
                REGISTER
            </ContactHeader>

        </ContactSection>
    )

}

export default Contact;