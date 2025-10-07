/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Image, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useState } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

const items = [
  {
    id: 1,
    title: 'Item 1',
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.SCQPZQS2DvnUuHJGSjV5DQAAAA%3Fcb%3D12%26pid%3DApi&f=1&ipt=fb3a10ff7eb6921fa38ec4c732d6456b722650ed34f0be025df233ecc60f4408&ipo=images"
  },
  {
    id: 2,
    title: 'Item 2',
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%2Fid%2FOIP.Lqer4cBBaxtg5qjgYzhPswHaHa%3Fcb%3D12%26pid%3DApi&f=1&ipt=f508368c9761854fca643d62c3f9c9f256f8c9583e37ff012917e17d52a8981a&ipo=images"
  },
  {
    id: 3,
    title: 'Item 3',
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.hFgcBmCV4ZMBP1AjAbb4OQHaKB%3Fcb%3D12%26pid%3DApi&f=1&ipt=2392b31a5836adb80e140e5c752def2d96eac63177ce41659de77ea215f09ace&ipo=images"
  },
  {
    id: 4,
    title: 'Item 4',
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.hZP2JLkjRp8mW7Uz65_m7wHaE7%3Fcb%3D12%26pid%3DApi&f=1&ipt=665ba891b063e7861403f0fb6b1301d45200dbbf00a62cd305ce61519d59c028&ipo=images"
  },
  {
    id: 5,
    title: 'Item 5',
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.NBpiM3cHGCJ4JwmPz2GwdQHaGH%3Fcb%3D12%26pid%3DApi&f=1&ipt=34e4a947e411dee6377ad677c407385e7fe0c47e60e842afaa4b6a3c7568b8ed&ipo=images"
  },
  {
    id: 6,
    title: 'Item 6',
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.xST7FQLB1-2MMZtX65YpAQHaE7%3Fcb%3D12%26pid%3DApi&f=1&ipt=42e29659ff3d0c8d04ba845bb7c2add9503b95b06299ef1280cb74b836344312&ipo=images"
  },
  {
    id: 7,
    title: 'Item 7',
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.eIhhQblQ1SYYYZ2kSObd7AHaLH%3Fcb%3D12%26pid%3DApi&f=1&ipt=ba7d9341c2f74c0111e2b6aae2a7ae8b670a4792eed00e415d7eaa50f67b2ca1&ipo=images"
  },
  {
    id: 8,
    title: 'Item 8',
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.0s5BscD_1T2dMEZ6V_wAQQHaEK%3Fcb%3D12%26pid%3DApi&f=1&ipt=2d1db5095ae22bbf4e219bf01b2f2fae30fcff1dca0698cf0de63610eeb91f42&ipo=images"
  },
  {
    id: 9,
    title: 'Item 9',
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.E_I3XfRfDdNyOOzdRcVhGQHaEK%3Fcb%3D12%26pid%3DApi&f=1&ipt=c3167b3687adbcbcbfdc0b949e73cc6d824063d61e1b10a4e6690eb80dffe7fe&ipo=images"
  },
]

interface APIPhotoBase {
  url: string;
  width: number;
  height: number;
  position: number;
  centerX: number;
  centerY: number;
}

const defaultPhotos: (APIPhotoBase | undefined)[] = [
  undefined,
  {
    url: items[0].url,
    width: 100,
    height: 100,
    position: 0,
    centerX: 50,
    centerY: 50,
  },
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];


function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  const [photos, setPhotos] = useState<(APIPhotoBase | undefined)[]>(defaultPhotos);  

  return (
    <View style={styles.container}>
      <View style={{...styles.flexWrapper,  paddingBottom: safeAreaInsets.bottom, paddingTop: safeAreaInsets.top}}>
        
        {/* {items.map((item) => {
          const id = item.id;
          const exists = !!(id % 2);
          const actionViewStyle = exists ? styles.addPhotoActionView : styles.removePhotoActionView;
          return (
            <View key={item.id} style={styles.photoView}>
              <Image source={{uri: item.url}} style={styles.photoImage} />
              <View style={{...styles.photoActionView, ...actionViewStyle}}>
                <Text style={{color: actionViewStyle.color, ...styles.photoActionViewText}}>{exists ? '+' : 'x'}</Text>
              </View>
            </View>
          )
        })} */}

        {photos.map((photo, index) => {

          if (!photo) {
            return <View key={index} style={styles.photoView}>
            <View style={{...styles.photoActionView, ...styles.addPhotoActionView}}>
              <Text style={{color: styles.addPhotoActionView.color, ...styles.photoActionViewText}}>+</Text>
            </View>
          </View>;
          }

          const actionViewStyle = styles.removePhotoActionView;
          return (
            <View key={index} style={styles.photoView}>
              <Image source={{uri: photo.url}} style={styles.photoImage} />
              <View style={{...styles.photoActionView, ...actionViewStyle}}>
                <Text style={{color: actionViewStyle.color, ...styles.photoActionViewText}}>x</Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', flex: 1, paddingLeft: 8, paddingRight: 8
  },
  photoView: {
    position: 'relative',
    width: '29.33%',
    height: "25%",
    margin: '2%',
    backgroundColor: '#e9eef2',
    borderWidth: 2,
    borderColor: '#dee1e9',
    borderStyle: 'dashed',
    borderRadius: 14,
  },
  photoActionView: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    backgroundColor: '#aaa',
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.1)",
    alignItems: 'center',
  },
  addPhotoActionView: {
    color: "red",
    backgroundColor: "white",
  },
  removePhotoActionView: {
    color: "white",
    backgroundColor: "red",
  },
  photoActionViewText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  photoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
  },
});

export default App;
