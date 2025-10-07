/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

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
  },
  {
    id: 2,
    title: 'Item 2',
  },
  {
    id: 3,
    title: 'Item 3',
  },
  {
    id: 4,
    title: 'Item 4',
  },
  {
    id: 5,
    title: 'Item 5',
  },
  {
    id: 6,
    title: 'Item 6',
  },
  {
    id: 7,
    title: 'Item 7',
  },
  {
    id: 8,
    title: 'Item 8',
  },
  {
    id: 9,
    title: 'Item 9',
  },
]

function AppContent() {
const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={{...styles.flexWrapper,  paddingBottom: safeAreaInsets.bottom, paddingTop: safeAreaInsets.top}}>
        
        {items.map((item) => {
          const id = item.id;
          const exists = !!(id % 2);
          const actionViewStyle = exists ? styles.addPhotoActionView : styles.removePhotoActionView;
          return (
            <View key={item.id} style={styles.photoView}>
              <View style={{...styles.photoActionView, ...actionViewStyle}}>
                <Text style={{color: actionViewStyle.color, ...styles.photoActionViewText}}>{exists ? '+' : 'x'}</Text>
              </View>
              {/* <Text key={item.id}>{item.title}</Text> */}
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
});

export default App;
