import React from 'react';
import { ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './styles';
import { TProductCardProps } from './types';

const ProductCard: React.FC<TProductCardProps> = props => {
  const { product, onPress, isSelected } = props;

  return (
    <S.Container onPress={() => onPress(product)} activeOpacity={0.8}>
      <S.ImageContainer>
        <ImageBackground
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJW91eeRQk8p5CwQneYG15EDoFsof5QuXXcHhfzconHGNMtfieXKoOLeP_F2BGRpBql98&usqp=CAU',
          }}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </S.ImageContainer>
      <S.ProductTitle>{product?.name}</S.ProductTitle>
      <S.PriceTag>{product?.price}</S.PriceTag>

      {isSelected && (
        <S.CheckIconContainer>
          <Icon name="ios-checkmark-sharp" size={38} color={'#832df2'} />
        </S.CheckIconContainer>
      )}
    </S.Container>
  );
};

export default ProductCard;
