import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: #e3e3e3;
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  color: #6b6b6b;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #000000;
`;

export const Dot = styled.TouchableOpacity`
  position: absolute;

  height: 28px;
  width: 28px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  background: #832df2;
  top: -12px;
  right: 10px;
`;
