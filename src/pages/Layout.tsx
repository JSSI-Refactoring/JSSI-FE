import styled from "styled-components";
import logo from "../assets/logo/logo.png";
import ServicePage from "../component/service/\bServicePage";
export default function Layout() {
  return (
    <FullPage>
      <LogoImage src={logo} />
      <ServicePage />
    </FullPage>
  );
}

const FullPage = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const LogoImage = styled.img`
  position: absolute; // 부모 요소를 벗어나서 설정해야 하기때문에 이렇게 된건가?
  top: 17px;
  left: 17px;
  width: 226px;
  height: 106px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
