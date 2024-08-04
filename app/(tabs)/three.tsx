import CustomBottomSheet from '@/components/CustomBottomSheet';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function TabOneScreen() {
  const sheetRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = ['70%'];

  // Function to handle tap outside the bottom sheet
  const handleBackdropPress = () => {
    if (sheetRef.current) {
      sheetRef.current.close(); // Close the bottom sheet
    }
  };

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
    []
  );
  return (
    <View>
      <Button title="Show Bottom Sheet" onPress={() => sheetRef.current?.present()} />
      <CustomBottomSheet ref={sheetRef} title="Awesome 🎉" />
    </View>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Button title="Show Bottom Sheet" onPress={() => sheetRef.current?.present()} />
    //     <BottomSheetModal
    //         ref={sheetRef}
    //         snapPoints={snapPoints}
    //         enablePanDownToClose={true}
    //         handleIndicatorStyle={{ backgroundColor: 'white' }}
    //         backdropComponent={renderBackdrop}
    //     >
    //         <View style={{ flex: 1, alignItems: 'center' }}>
    //             <Text>Awesome 🎉</Text>
    //             <XCircle size={32} color='red' weight='fill' />
    //         </View>
    //     </BottomSheetModal>
    // </View>
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
