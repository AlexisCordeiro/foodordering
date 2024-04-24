import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import CustomHeader from '@/constants/components/CustomHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />,
          }} />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: 'modal',
            headerTitle: 'Filter',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary} />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="(modal)/location-search"
          options={{
            presentation: 'fullScreenModal',
            headerTitle: 'Select location',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary} />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="(modal)/dish"
          options={{
            presentation: 'modal',
            headerTitle: '',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity style={{ backgroundColor: "#fff", borderRadius: 10, padding: 6 }} onPress={() => { navigation.goBack() }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary} />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen name='basket' options={{
          headerTitle: "Basket",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {
              navigation.goBack()
            }}>
            <Ionicons name='arrow-back' size={28} color={Colors.primary} />
            </TouchableOpacity>
          )
        }} />
      </Stack>
    </BottomSheetModalProvider>
  );
}
