import React from 'react';
import {View} from 'react-native';
import styles from './CardsStack.styles';
import users from '../../../../constants/dummyData/users';
import Swiper from 'react-native-deck-swiper';
import CardItem from '../CardItem/CardItem.view';
import OverlayLabel from '../../../../ui/components/OverlayLabel/OverlayLabel.view';
import overlays from '../../../../constants/overlays';

const CardsStack = (): JSX.Element => {
  const cardStyle = {
    height: 580,
    width: 332,
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={users}
        renderCard={card => {
          return <CardItem item={card} />;
        }}
        cardStyle={cardStyle}
        overlayLabels={{
          left: {
            element: <OverlayLabel type={overlays.NO} />,
            style: {
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: -30,
              },
            },
          },
          right: {
            element: <OverlayLabel type={overlays.YES} />,
            style: {
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30,
              },
            },
          },
        }}
        cardIndex={0}
        stackSize={4}
      />
    </View>
  );
};

export default CardsStack;
