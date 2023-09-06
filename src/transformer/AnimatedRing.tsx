import { Dimensions, StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withDelay,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

// Import your SVG files correctly
import SVGSongs from "../../assets/imageRing/songs.svg";
import SVGStores from "../../assets/imageRing/stores.svg";
import SVGBrodcast from "../../assets/imageRing/brodcast.svg";
import SVGRa from "../../assets/imageRing/ra.svg";

type Props = {};

const halfScreenWidth = Dimensions.get("window").width / 2;
const halfScreenHeight = Dimensions.get("window").height / 2;

const Ring = ({ delay, color, imageSource }: any) => {
  const ring = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      opacity: 1 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0.5, 3]),
        },
      ],
      borderColor: color,
      borderWidth: 1,
    };
  });
  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 4000, 
          easing: Easing.linear,
        }),
        -1
      )
    );
  }, []);
  return (
    <Animated.View style={[styles.ring, style, {width: halfScreenWidth, height: halfScreenHeight / 2}]}>
      <View style={{ marginTop: halfScreenWidth / 5 }}>{imageSource}</View>
    </Animated.View>
  );
};

const AnimatedRing = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>موسيقى, بودكاست وقصص بلا توقف</Text>
      </View>
      <Ring
        delay={500}
        color="#F1A122"
        imageSource={<SVGSongs width={20} height={20} />}
      />
      <Ring
        delay={1000}
        color="#A1CE59"
        imageSource={<SVGStores width={20} height={20} />}
      />
      <Ring
        delay={1500} 
        color="#51C3C9"
        imageSource={<SVGBrodcast width={20} height={20} />}
      />
      <Ring
        delay={2000} 
        color="#CCA7CF"
        imageSource={<SVGRa width={20} height={20} />}
      />
    </View>
  );
};

export default AnimatedRing;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  ring: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 10,
  },
  content: {
    width: halfScreenWidth,
    height: halfScreenHeight / 2,
    backgroundColor: "#DAE0EE",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    borderColor: '#F1A122',
    borderWidth: 1,
  },
  title: {
    fontSize: halfScreenWidth / 9,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#312858'
  }
});
