import React, {FC} from 'react';
import {ContactLine, ContactSection, ContactText} from "./Contact.styled";

const Contact: FC = () => {
    return (
        <ContactSection>
            <ContactText>
                Register below to receive more information about Parkhouse, and to schedule a private tour. Please share
                the best way to reach you, and a member of our Sales Team will contact you soon.
            </ContactText>

            <ContactLine/>

            {/*<script type="text/javascript" id="aoform-script-91c3eb21-a53e-43b8-a5e8-f9193cca714c:d-0002">{!function(o,t,e,a){o._aoForms=o._aoForms||[],o._aoForms.push(a);var n=function(){var o=t.createElement(e);o.src=("https:"==t.location.protocol?"https://":"http://")+"marketing.polarispacific.com/acton/content/form_embed.js",o.async=!0;for(var a=t.getElementsByTagName(e)[0],n=a.parentNode,c=document.getElementsByTagName("script"),r=!1,s=0;s<c.length;s++){if(c[s].getAttribute("src")==o.getAttribute("src"))r=!0;}r?typeof(_aoFormLoader)!="undefined"?_aoFormLoader.load({id:"91c3eb21-a53e-43b8-a5e8-f9193cca714c:d-0002",accountId:"35347",domain:"marketing.polarispacific.com",isTemp:false,noStyle:false,prefill:false}):"":n.insertBefore(o,a)};window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1),n()}(window,document,"script",{id:"91c3eb21-a53e-43b8-a5e8-f9193cca714c",accountId:"35347",domain:"marketing.polarispacific.com",isTemp:false,noStyle:false,prefill:false})}</script>*/}
            <script type="text/javascript" id="aoform-script-91c3eb21-a53e-43b8-a5e8-f9193cca714c:d-0001">{!function(o,t,e,a){o._aoForms=o._aoForms||[],o._aoForms.push(a);var n=function(){var o=t.createElement(e);o.src=("https:"==t.location.protocol?"https://":"http://")+"marketing.polarispacific.com/acton/content/form_embed.js",o.async=!0;for(var a=t.getElementsByTagName(e)[0],n=a.parentNode,c=document.getElementsByTagName("script"),r=!1,s=0;s<c.length;s++){if(c[s].getAttribute("src")==o.getAttribute("src"))r=!0;}r?typeof(_aoFormLoader)!="undefined"?_aoFormLoader.load({id:"91c3eb21-a53e-43b8-a5e8-f9193cca714c:d-0001",accountId:"35347",domain:"marketing.polarispacific.com",isTemp:false,noStyle:true,prefill:true}):"":n.insertBefore(o,a)};window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1),n()}(window,document,"script",{id:"91c3eb21-a53e-43b8-a5e8-f9193cca714c",accountId:"35347",domain:"marketing.polarispacific.com",isTemp:false,noStyle:true,prefill:true})}</script>

        </ContactSection>
    )

}

export default Contact;