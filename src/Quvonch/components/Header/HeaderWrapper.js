import styled from 'styled-components'
import colorBox from "../../Styles/colors";
const HeaderWrapper = styled.div`
    max-width:1920px;
    padding:8px 0;
    position:fixed;
    top:0;
    width:100%;
    background-color:rgba(255,255,255,0.8);
    z-index:9999;
    
    .css-1cndkqf-MuiToolbar-root{
        max-width:1400px;
    }
    
    .MuiBox-root.css-1t6c9ts{
        color: ${colorBox.headerText} !important;
        
    }
    .css-1083xa6-MuiTypography-root>div>span,.css-qajuc8-MuiTypography-root>div>span{
    padding:1px 3px;
        width: 25px;
        height: 12px;
        background-color: #BBD8E2;
        font-size: 8px;
        border-radius:3px;
        
    }
    .css-1083xa6-MuiTypography-root{
        font-weight:900 !important;
        color: ${colorBox.textColor} !important;
    }
    .css-1083xa6-MuiTypography-root>div,.css-qajuc8-MuiTypography-root>div{
            transform:translatey(-12px);
    }
    .css-1083xa6-MuiTypography-root>div>span+span,.css-qajuc8-MuiTypography-root>div>span+span{
    display:flex;
    align-items:end;
    justify-content:start;
        width:8px;
        height:8px;
        background-color: ${colorBox.bgColor};
        border-radius:50%;
        color:#0069BA;
    }
    
    .MuiPaper-root{
        background:transparent !important;
        color:black !important;
        box-shadow:none;
    }
    .MuiButton-containedSizeMedium{
        background:${colorBox.bgColor};
        padding:5px 10px;
        font-weight:bold;
        color:white !important;
        border-radius:10px;
        &:hover{
             background:${colorBox.bgMoreColor};
        }
    }
    .MuiButton-root{
        color:${colorBox.textColor}; !important;
    }
    svg{
        width:20px;
        height:20px;
    }
    .MuiButton-outlinedSizeMedium{
        border:1px solid ${colorBox.headerText};
                border-radius:10px;
                padding:5px 10px;
        font-weight:bold;

        &:hover{
            border:1px solid ${colorBox.headerText};
        }
    }
    .hidden{
        height:68.5px;
    }
    .css-1t6c9ts>button{
        margin:0 20px;
    }
    
    
    // @media screen and (min-width: 1100px) and (max-width: 1300px){
    //     padding: 0 150px;
    // } 
    // @media screen and (min-width: 900px) and (max-width: 1099px){
    //     padding: 0 100px;
    // } 
    // @media screen and (min-width: 700px) and (max-width: 899px){
    //     padding: 0 50px;
    // } 
    // @media screen  and (max-width: 699px){
    //     padding: 0 ;
    // } 
`
export default HeaderWrapper