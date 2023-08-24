import { useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  margin: 0;
  /* list-style: none; */
  text-decoration: none;
  width: 100%;
  height: 100vh;
`;
const Header = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
`;
const Logo = styled.div`
  flex: 0.2;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 50px;
  img {
    height: 40px;
  }
`;
const SearchBox = styled.div`
  flex: 2.5;
  display: flex;
  position: relative;
  width: 50%;
  height: 62px;
  align-items: center;
`;
const Input = styled.input`
  /* flex: 1; */
  /* min-width: 150px; */
  width: 80%;
  height: 30px;
  box-shadow: 3px 5px 5px rgba(74, 88, 92, 0.589);
  border-radius: 5px;
`;
const SearchButton = styled.button`
  position: absolute;
  width: 60px;
  height: 30px;
  top: 50%;
  right: 5%;
  background: none;
  border: none;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
const NavHeader = styled.div`
width: 5%;
  flex: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  font-weight: 500;
  .ul_header {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
`;
const Exhibit = styled.a`
  display: flex;
  align-items: center;
  height: 33px;
  width: 62px;
  background: #ff333f;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  justify-content: center;
`;
const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  width: 82px;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  /* padding: 10px; */
  margin: 2px;
  :hover {
    background-color: rgba(232, 236, 240, 0.5);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  
`;
function App() {
  const logoUrl = "logo.svg";

  return (
    <Container>
      <Header>
        <Logo>
          <a href="#">
            <img src={logoUrl} alt="Logo" />
          </a>
        </Logo>
        <SearchBox action="" className="search_box">
          <Input
            className="search_text"
            type="text"
            // className=""
            placeholder="なにをお探しですか？？"
            id=""
          ></Input>
          <SearchButton id="search_button">
            <Icon icon="ic:baseline-search" />
          </SearchButton>
        </SearchBox>
        <NavHeader className="area_nav_header">
          <ul className="ul_header">
            <Li>
              <A href="">ログイン</A>
            </Li>
            <Li>
              <A href="">会員登録</A>
            </Li>
            <Li className="">
              <A href="">
                <Icon icon="mdi:bell" />
              </A>
            </Li>
            <Li>
              <Exhibit className="btn_contact" href="# ">
                出品
              </Exhibit>
            </Li>
          </ul>
        </NavHeader>
      </Header>
    </Container>
  );
}

export default App;
