import React, {FC, RefObject, useEffect, useState} from 'react';
import {ContactHeader, ContactLine, ContactSection, ContactText} from "./Contact.styled";
import contactEmbed from './contactEmbed'

interface IProps {
    contactRef: RefObject<HTMLDivElement> | null,
    windowWidth: number
}

const Contact: FC<IProps> = ({contactRef, windowWidth}) => {
    const [form, setForm] = useState<HTMLElement | null>(null)
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        const script = document.createElement("script");

        script.innerHTML = contactEmbed;
        script.type = 'text/javascript';
        script.id = 'aoform-script-65a7048d-2c63-41a9-86d3-c56af2931016:d-0004';
        contactRef && contactRef.current && contactRef.current.appendChild(script);
    }, [contactRef])

    const logSubmit = () => {
        const checkErrors = document.getElementsByClassName('ao-form-error').length;
        if (!checkErrors) {
            window.scrollTo({
                top: contactRef && contactRef.current && contactRef.current.offsetTop - 100 || 0,
            })
        }
    }

    useEffect(() => {

        if (!form && counter < 20 && windowWidth < 992) {
            const interval = setInterval(() => {
                setCounter(count => count + 1)
                const getForm = document.getElementById('ao-form-65a7048d-2c63-41a9-86d3-c56af2931016');
                setForm(getForm);
                if (getForm)
                    getForm.addEventListener('submit', logSubmit)
            }, 1000);
            return () => clearInterval(interval);
        } else return;
    }, [form, counter]);

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