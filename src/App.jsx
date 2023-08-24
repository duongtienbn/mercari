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
  width: 60%;
  height: 62px;
  align-items: center;
`;
const Input = styled.input`
  flex: 1;
  height: 30px;
  box-shadow: 3px 5px 5px rgba(74, 88, 92, 0.589);
  border-radius: 5px;
`;
const SearchButton = styled.button`
  width: 60px;
  height: 30px;
  position: absolute;
  top: 50%;
  right: -5%;
  background: none;
  border: none;
  transform: translate(-50%, -50%);
  cursor: pointer;
  right: -27px;
`;
const NavHeader = styled.div`
  flex: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  font-weight: 500;
  .ul_header {
    display: flex;
    align-items: center;
  }
  li {
    display: flex;
    align-items: center;
    padding: 10px;
    margin:5px;
    :hover {
      background-color: rgba(232, 236, 240, 0.5);
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      width: 70px;
      height: 20px;
      padding: 10px;
    }
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
function App() {
  const logoUrl = "logo.svg";
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header>
        <Logo>
          <a href="#">
            <img src={logoUrl} alt="Logo" />
          </a>
        </Logo>
        <SearchBox action="" class="search_box">
          <Input
            class="search_text"
            type="text"
            nameName=""
            placeholder="なにをお探しですか？？"
            id=""
          ></Input>
          <SearchButton id="search_button">
            <Icon icon="ic:baseline-search" />
          </SearchButton>
        </SearchBox>
        <NavHeader className="area_nav_header">
  <ul className="ul_header">
    <li>
      <a href="">ログイン</a>
    </li>
    <li>
      <a href="">会員登録</a>
    </li>
    <li className="">
      <a href="">
        <Icon icon="mdi:bell" />
      </a>
    </li>
    <li>
      <Exhibit className="btn_contact" href="# ">
        出品
      </Exhibit>
    </li>
  </ul>
</NavHeader>

      </Header>
    </Container>
  );
}

export default App;
