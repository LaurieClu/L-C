import styled  from "styled-components";

export const WrapperMenu = styled.div`
	display: flex;
    width: 300px;
	height: 100vh;
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


export const List = styled.li`
    display: flex;
    color: white;
    fontSize: 18px;
    list-style-type: none;
    &:hover {
        opacity: 0.5 ;
    }
    // &li.active&:hover {
    //     opacity: 0;
    // }
`;

export const WrapperLink = styled.div`
    display: flex;
    margin-top: 7%;
    height: 50px;
    width: 130%;
    align-items:center;
    justify-content:center;
`;
