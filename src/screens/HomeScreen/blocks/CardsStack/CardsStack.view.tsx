import React from 'react';
import {View} from 'react-native';
import styles from './CardsStack.styles';
import users from '../../../../constants/dummyData/users';
import Swiper from 'react-native-deck-swiper';
import CardItem from '../CardItem/CardItem.view';
import OverlayLabel from '../../../../ui/components/OverlayLabel/OverlayLabel.view';
import overlays from '../../../../constants/overlays';
import colors from '../../../../ui/theme/colors';

const CardsStack = (): JSX.Element => {
  const cardStyle = {
    height: 580,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  };

  const overlayLabelsStyle = {
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
  };

  return (
    <View>
      <Swiper
        containerStyle={styles.swiperContainer}
        cards={users}
        renderCard={card => {
          return <CardItem item={card} />;
        }}
        cardStyle={cardStyle}
        verticalSwipe={false}
        overlayLabels={overlayLabelsStyle}
        cardIndex={0}
        stackSize={2}
      />
    </View>
  );
};

export default CardsStack;
