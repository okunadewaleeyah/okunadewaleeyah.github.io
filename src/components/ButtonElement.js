import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 5px;
    background: rgb(121, 104, 54);
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 49px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #000;
    }
`

// border-radius: 50px;
// background: ${({primary}) => (primary  ? 'rgb(146, 115, 23)' : '#010606')};
// white-space: nowrap;
// padding: ${({big}) => (big ? '14px 49px' : '12px 30px')};
// color: ${({dark}) => (dark ? '010606' : 'fff')};
// font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
// outline: none;
// border: none;
// cursor: pointer;
// display: flex;
// justify-content: center;
// align-items: center;
// transition: all 0.2s ease-in-out;

// &:hover {
//     transition: all 0.2s ease-in-out;
//     background: ${({primary}) => (primary  ? '#fff' : 'rgb(146, 115, 23)')};
// }