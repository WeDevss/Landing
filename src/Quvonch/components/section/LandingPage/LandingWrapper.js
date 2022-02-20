import styled from 'styled-components'
import colorBox from "../../../Styles/colors";

const LandingWrapper = styled.div`

    #first{
        min-height:80vh;
        margin-bottom:140px;
        margin-top:68.5px;
    }
    
    #first button{
        padding:0px 20px;
        border-radius:10px;
        background-color:${colorBox.bgColor};
        font-weight:bold;
    }
    
    #first button+button{
        background:transparent;
        color:${colorBox.textColor};
        border:none;
        margin-left:30px;
    }
    #first button+button svg{
        width:45px;
        height:45px;
        color:${colorBox.bgColor};
        border:1px solid ${colorBox.bgColor};
        border-radius:50%;
    }
    #first button+button>span{
        margin-right:10px;
    }
    
        @media screen and (max-width:900px){
         #first{
        .md:w-full{
            weight:100%;
        }
    }
         text-align:center;
                img{
                display:none;}
        }
        
        
        
    #second{
    margin-bottom:200px;
        h1{
            margin:80px 0;
        }
        img{
            height:30px;
        }
    }
    #third img{
        border-radius:20px;
    }
`

export default LandingWrapper