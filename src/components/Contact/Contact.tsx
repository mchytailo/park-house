import React, {FC, RefObject, useEffect} from 'react';
import {ContactHeader, ContactLine, ContactSection, ContactText} from "./Contact.styled";
import contactEmbed from './contactEmbed'


interface IProps {
    contactRef: RefObject<HTMLDivElement> | null
}

const Contact: FC<IProps> = ({contactRef}) => {
    useEffect(() => {
        const script = document.createElement("script");

        script.innerHTML = contactEmbed;
        script.type = 'text/javascript';
        script.id = 'aoform-script-65a7048d-2c63-41a9-86d3-c56af2931016:d-0004';
        contactRef && contactRef.current && contactRef.current.appendChild(script);
        console.log('Test 111111')
        contactRef?.current?.addEventListener("load", function (event: Event) {
            if (event?.target?.nodeName === "SCRIPT") {
                console.log('Test load')
                const form = document.getElementById('ao-form-65a7048d-2c63-41a9-86d3-c56af2931016');
                form && form.addEventListener('submit', logSubmit);
                console.log(form,'Test form')
            }
        }, true);
    }, [contactRef])

    const logSubmit = () => {
        console.log('Test logSubmit')
        window.scrollTo({
            top: contactRef && contactRef.current && contactRef.current.offsetTop - 100 || 0,
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second!');
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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