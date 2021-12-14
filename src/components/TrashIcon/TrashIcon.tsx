import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as S from './styles';

const TrashIcon: React.FC<{ length: number }> = props => {
  const { length } = props;

  return (
    <S.Container>
      <Icon name="trash" size={32} />
      {length ? (
        <S.Dot>
          <S.LengthText>{length}</S.LengthText>
        </S.Dot>
      ) : (
        <></>
      )}
    </S.Container>
  );
};

export default TrashIcon;
