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
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, paddingTop: safeAreaInsets.top, paddingBottom: safeAreaInsets.bottom, paddingLeft: 8, paddingRight: 8 }}>
        {items.map((item) => (
          <Text key={item.id}>{item.title}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
