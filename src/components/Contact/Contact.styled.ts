import styled from "styled-components";

export const ContactSection = styled.div`  
    padding: 80px 100px;
    background: #9EA69C;

    .ao-form {
        input[type=checkbox], input[type=radio] {
            display: none;
        }
        input[type=checkbox]+span:before, 
        input[type=radio]+span:before {
            content: "";
            border: 1px solid #fff;
            width: 22px;
            height: 22px;
            display: block;
            transition: all .5s ease-in-out;
            margin-right: 10px;
            box-shadow: inset 0 0 0 1px #fff;
            flex: 0 0 22px;
            position: absolute;
            left: 0;
        }
        
        input[type=checkbox]+span, 
        input[type=radio]+span {
            display: block;
            font-family: OptimaNormal,sans-serif;
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5;
            font-weight: 400;
            padding-left: 30px;
            position: relative;
            cursor: pointer;
        }
        
        input[type=checkbox]:checked+span:before,
        input[type=radio]:checked+span:before {
            box-shadow: inset 0 0 0 6px rgb(158, 166, 156);
            background: #fff;
        }
        
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
            padding: 0 60px 0 0 !important;
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
            .ao-column:nth-child(3) .ao-column-inner {
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
                }
                    .ao-block-wrapper:nth-child(2) .ao-combo-layout {
                        display: flex;
                        flex-direction: column;
                        .ao-combo-label {
                            margin-bottom: 24px;
                        }
                    }
    
    
    
            }
        }
        
        
        
        .ao-submit-block{
            margin-top: 60px;
           
            > div {
                text-align: left !important;
            }
            
            button.ao-form-submit {
                font: normal normal normal 28px/28px Optima;
                letter-spacing: 7.39px;
                text-transform: uppercase;
                transition: .2s;
                
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