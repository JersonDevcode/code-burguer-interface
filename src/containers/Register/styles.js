import styled from "styled-components";
import BackgroundImage from '../../assets/Background-login.svg'

export const Container = styled.div`
height: 100vh;
width: 100vw;
background: url('${BackgroundImage}');
display: flex;
justify-content: center;
align-items: center;
`

export const RegisterImage = styled.img`
     height: 80%;
`

export const ContainerItens = styled.div`
background: #373737;
border-radius: 0 10px 10px 0;
height: 80%;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;

h1{
     font-style: normal;
     font-weight: 500;
     font-size: 24px;
     line-height: 28px;
     color: #FFFFFF;
     text-align: center;
     margin-top: 10px;
}

form {
     display: flex;
     flex-direction: column;
}
`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
margin-top: ${props => props.error ? '1px': '16px'};;
margin-bottom: 5px;
`

export const Input = styled.input`
width: 391.42px;
height: 38.32px;
background: #FFFFFF;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
border:${props => props.error ? '2px solid #CC1717': 'none'};
padding-left: 10px;
`

export const SignInLink = styled.p`
 font-style: normal;
 font-weight: 300;
 font-size: 14px;
 line-height: 16px;
 color:#FFFFFF;

 a{
     cursor:pointer;
     text-decoration: underline;
 }
`

export const ErrorMessage = styled.p`
font-weight: normal;
font-size: 14px;
font-style: normal;
line-height: 18px;
color:#cc1717;
margin-top: auto;
`
export default styled