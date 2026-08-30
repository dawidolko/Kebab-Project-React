import styled from "styled-components";

export const CartButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  padding: 6px 10px;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -2px;
  right: -4px;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 10px;
  background: #ffc500;
  color: #1a1a1a;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
`;

export const Panel = styled.div`
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 1200;
  width: min(360px, calc(100vw - 32px));
  max-height: 70vh;
  overflow-y: auto;
  padding: 18px;
  border-radius: 10px;
  background: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  h2 {
    font-size: 1.1rem;
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #ffc500;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #2b2b2b;

  strong {
    display: block;
    font-size: 0.95rem;
  }

  small {
    color: #b9b9b9;
  }
`;

export const QtyControls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  button {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: 1px solid #444;
    background: #262626;
    color: #fff;
    cursor: pointer;
    font-size: 0.95rem;
  }
`;

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 14px 0 10px;
  font-weight: 700;
`;

export const Empty = styled.p`
  margin: 8px 0 0;
  color: #b9b9b9;
`;
