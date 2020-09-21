import React, {FC, RefObject, useEffect} from 'react';
import {ContactHeader, ContactLine, ContactSection, ContactText} from "./Contact.styled";
import contactEmbed from './contactEmbed'


interface IProps {
    contactRef: RefObject<HTMLDivElement> | null
}

const Contact: FC<IProps> = ({contactRef}) => {
    useEffect(()=>{
        const script = document.createElement("script");

        script.innerHTML = contactEmbed;
        script.type = 'text/javascript';
        script.id = 'aoform-script-65a7048d-2c63-41a9-86d3-c56af2931016:d-0004';
        contactRef && contactRef.current && contactRef.current.appendChild(script);
        const form = document.getElementById('aoform-script-65a7048d-2c63-41a9-86d3-c56af2931016');
        form && form.addEventListener('submit', logSubmit);
    },[contactRef])

    const logSubmit = () => {
        console.log('TEst')
        window.scrollTo({
            top: contactRef && contactRef.current && contactRef.current.offsetTop - 100 || 0,
        })
    }

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