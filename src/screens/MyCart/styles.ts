import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const AmountContainer = styled.View`
  width: 100%;
  background: #20d25c;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const AmountDetailsText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const AmountText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
`;

export const ListHeader = styled.View`
  padding: 0 20px 15px 20px;
`;
export const ListHeaderText = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;
