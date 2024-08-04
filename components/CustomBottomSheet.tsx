import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { XCircle } from 'phosphor-react-native';
import React, { forwardRef, useCallback } from 'react';
import { Text, View } from 'react-native';

interface CustomBottomSheetProps {
  title: string;
}

const CustomBottomSheet = forwardRef<BottomSheetModalMethods, CustomBottomSheetProps>(
  (props, ref) => {
    const snapPoints = ['50%', '90%'];

    // Function to handle tap outside the bottom sheet
    const handleBackdropPress = () => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.close(); // Close the bottom sheet
      }
    };

    const renderBackdrop = useCallback(
      (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
      []
    );

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <BottomSheetModal
          ref={ref}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          handleIndicatorStyle={{ backgroundColor: 'white' }}
          backdropComponent={renderBackdrop}
        >
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>Awesome 🎉</Text>
            <XCircle size={32} color="red" weight="fill" />
          </View>
        </BottomSheetModal>
      </View>
    );
  }
);

export default CustomBottomSheet;
