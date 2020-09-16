import styled from "styled-components";

export const ContactSection = styled.div`  
    padding: 40px 40px;
    background: #9EA69C;
    @media (min-width: 1200px) { 
        padding: 80px 100px;
    }


@media (max-width: 991.98px) { 

}


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
            color: white;
        }
        
        input[type=checkbox]:checked+span:before,
        input[type=radio]:checked+span:before {
            box-shadow: inset 0 0 0 6px rgb(158, 166, 156);
            background: #fff;
        }
        
        .ao-form-label, .ao-combo-label {
            text-align: left;
            font: normal normal bold 16px/20px OptimaNormal !important;
            letter-spacing: 1.3px !important
            color: #fff;
            text-transform: uppercase;
            white-space: nowrap;
                color: white;
            
            
            @media (min-width: 1300px) { 
                letter-spacing: 4px;
                font: normal normal bold 18px/24px OptimaNormal ;
            }
        }
        .ao-form-label {
            margin-bottom: 8px;
        }
        
        .ao-column-inner{
            padding: 0 10% 0 0 !important;
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
        
            @media (max-width: 1199.98px) {
                display: flex;
                flex-wrap: wrap;
                
                .ao-column.ao-column-4 {
                    width: 50%;
                }
                
                .ao-column.ao-column-4:nth-child(3) {
                    width: 100%;
                    
                    .ao-column-inner {
                        display: flex;
                        flex-direction: row;
                        > .ao-block-wrapper {    
                            width: calc(50% - 30px);
                        }
                    }
                    
                }  
            }
        
            @media (max-width: 991.98px) {
            
                .ao-column.ao-column-4 {
                    width: 100%;
                    &:nth-child(2) {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        
                        > .ao-block-wrapper:nth-child(1),
                        > .ao-block-wrapper:nth-child(2){
                            width: calc(50% - 12px);
                        }
                        > .ao-block-wrapper:nth-child(3){
                            width: 100%;
                        }
                    }
                }
                .ao-column-inner {
                    padding: 0 !important;
                }
                
                .ao-column.ao-column-4:nth-child(3) {
                    width: 100%;
                    
                    .ao-column-inner {
                        flex-direction: row !important;
                        > .ao-block-wrapper {    
                            width: calc(50% - 30px);
                        }
                    }
                    
                }  
            }
        
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
                .ao-combo-layout {
                    outline: none;
                }
    
    
            }
        }
        
        
        
        .ao-submit-block{
            margin-top: 60px !important;
               
            @media (max-width: 1199.98px) {
               margin-top: 30px;
            }
            > div {
                text-align: left !important;
            }
            
            button.ao-form-submit {
                font: normal normal normal 28px/28px OptimaNormal !important;
                letter-spacing: 7.39px;
                text-transform: uppercase;
                transition: .2s;
                outline: none;  
                padding: 20px 100px !important;
                background: rgb(158, 166, 156) !important;
                border: 3px solid white !important;
                color: white;
                &:hover{
                    background: white !important;
                    color: rgb(158, 166, 156) !important
                }
            }
        
        }

        .ao-form-error-message {
            text-align: right;
            font: 16px / 20px OptimaNormal !important;
            letter-spacing: 1px;
            margin-top: 4px;
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
export const ContactHeader = styled.h2`  
    font: normal normal normal 48px/48px OptimaNormal;
    letter-spacing: 12.67px;
    color: #FFFFFF;
    text-transform: uppercase;
    margin-bottom: 70px;
    `
export const ContactLine = styled.div`  
    height: 1px;
    background: #FFFFFF;
    margin-bottom: 70px;
    `