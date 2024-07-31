import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import BottomSheet from '@gorhom/bottom-sheet';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Platform, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ModalScreen() {
  const sheetRef = React.useRef<BottomSheet>(null);
  const [sheetIndex, setSheetIndex] = React.useState(-1); // Initial state to hide the sheet
  const snapPoints = ['100%'];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Open Bottom Sheet" onPress={() => setSheetIndex(0)} />
          <BottomSheet
            ref={sheetRef}
            index={sheetIndex}
            snapPoints={snapPoints}
            onChange={index => setSheetIndex(index)}
          >
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
