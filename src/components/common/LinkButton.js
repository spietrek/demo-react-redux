import styled from 'styled-components';

const LinkButton = styled.a`
  border-radius: 2px;
  border: solid 1px #20538d;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4),
    0 1px 1px rgba(0, 0, 0, 0.2);
  background: #2e59a8;
  color: #fff;
  padding: 2px 3px;
  text-decoration: none;
  font-size: 11px;
  margin-right: 8px;
  font-weight: 100;
  &:hover {
    opacity: 0.7;
  }
`;

export default LinkButton;
