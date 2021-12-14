import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 46%;
  margin-right: 7%;
  margin-bottom: 20px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #6b6b6b;
`;

export const PriceTag = styled.Text`
  font-size: 24px;
  color: #000000;
`;

export const ImageContainer = styled.View`
  background: #e3e3e3;
  width: 100%;
  height: 240px;
  border-radius: 4px;

  margin-bottom: 4px;
  align-items: center;
  justify-content: center;
`;

export const CheckIconContainer = styled.View`
  position: absolute;
  top: 5px;
  left: 5px;
`;
