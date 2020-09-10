import styled from "styled-components";

export const ContactSection = styled.div`  

    min-height: 100vh;
    padding: 80px 100px;
    background: #9EA69C;

    .ao-form {
        .ao-form-label, .ao-combo-label {
            text-align: left;
            font: normal normal bold 18px/24px OptimaNormal;
            letter-spacing: 4.32px;
            color: #fff;
            text-transform: uppercase;
        }
        
        .ao-column-inner{
            padding: 0 60px 0 0;
        }
        
        .ao-form-field {
            height: 80px;
        }
    }
    `
export const ContactText = styled.div`  
    text-align: left;
    font: normal normal normal 32px/40px OptimaNormal;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-bottom: 80px;
    `
export const ContactLine = styled.div`  
    height: 1px;
    background: #FFFFFF;
    margin-bottom: 80px;
    `