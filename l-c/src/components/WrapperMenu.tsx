import styled  from "styled-components";

export const WrapperMenu = styled.div`
	display: flex;
    max-width: 20%;
	width: 100%;
	height: 100vh;;
    text-align: center;
    align-content: space-between;
    flex-direction: column;
    background-color: #C9156B;
`;

export const Logo = styled.div`
    height: 20%;
    background-color: #C9156B;
`;

export const LogoTitle = styled.p`
    color: white;
    font-weight: bold;
    font-size: 18px;
    padding-top: 10%;
`;

export const WrapperContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
margin-top: -50px;
margin-left: -50px;
width: 100px;
height: 100px;
`;

export const WrapperGlobal = styled.div`
    display: flex;
    flex-direction: row;
`;