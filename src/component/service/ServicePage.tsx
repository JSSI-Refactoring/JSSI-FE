import styled from "styled-components";
import ServiceHeader from "./ServiceHeader";
import ServiceFooter from "./ServiceFooter";

export default function ServicePage() {
  return (
    <ServiceLayout>
      <ServiceHeader />
      <ServiceContent>
        <div style={{ height: "1000px" }}>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
      </ServiceContent>
      <ServiceFooter />
    </ServiceLayout>
  );
}

const ServiceLayout = styled.section`
  position: relative;
  width: 375px;
  height: 100%;
  border: 1px solid black;
  align-items: center;
  @media (max-width: 1024px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 1024px;
  }
`;

const ServiceContent = styled.div`
  position: absolute;
  top: 68px;
  width: 100%;
  height: calc(
    100vh - 136px
  ); // 부모 기준 height에서 그 값을 뺀 만큼이 컨텐츠의 높이
  overflow: auto;
`;
