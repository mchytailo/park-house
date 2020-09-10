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
        .ao-form-label {
            margin-bottom: 8px;
        }
        
        .ao-column-inner{
            padding: 0 60px 0 0;
        }
        
        .ao-form-field {
            background: #889287 !important;
            border: none;
            border-radius: 0 !important;
            padding: 20px !important;
            font: normal normal normal 24px/30px OptimaNormal !important;
            letter-spacing: 2px;
            color: white;
        }
        
        .ao-row:nth-child(1) {
            .ao-column:nth-child(3).ao-column-inner {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .ao-combo-block {
                    .ao-form-label {
                        margin-bottom: 24px;
                    }
                    .ao-combo-label {
                        display: flex;
                        align-items: center;
                        margin-right: 35px;
                        
                        input{
                            margin: 0 8px 0 0;
                        }
                    }
                    
                    &:nth-child(1) .ao-combo-layout {
                        display: flex;
                    }
                    &:nth-child(2) .ao-combo-layout {
                        display: flex;
                        flex-direction: column;
                    }
                }
    
    
    
            }
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