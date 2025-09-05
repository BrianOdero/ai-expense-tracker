import { OnboardingStyles } from "@/styles/onboardingStyles";
import { Text, View } from "react-native";
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native';

export default function Index() {

  const styles = OnboardingStyles()

  //done button component
  const DoneButton = ({...props}) => (
    <View style={styles.donebutton}>
      <Text style={styles.onboardingButtonColor} {...props}>Done</Text>
    </View>
  )

  const SkipButton = ({...props}) => (
    <View style={styles.skipbutton}>
      <Text style={styles.onboardingButtonColor} {...props}>Skip</Text>
    </View>
  )

  const NextButton = ({...props}) => (
    <View style={styles.nextbutton}>
      <Text style={styles.onboardingButtonColor} {...props}>Next</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Onboarding
        bottomBarHeight={80}
        DoneButtonComponent={DoneButton}
        SkipButtonComponent={SkipButton}
        NextButtonComponent={NextButton}
        //removing the background color of the bottom tab
        bottomBarColor="transparent"
        bottomBarHighlight={false}
        pages={[
          {
            backgroundColor: "#FFFFFF",
            image: <LottieView 
              autoPlay 
              style={styles.lottieAnimation} 
              source={require('@/assets/animations/helloAnimation.json')}
            />,
            title: <Text style={styles.onboardingTitle}>WELCOME TO EXPENSE TRACKER</Text>,
            subtitle: 'Easily monitor all your daily spending in one place',
          },
          {
            backgroundColor: "#FFF4E6",
            image:<LottieView 
              autoPlay 
              style={styles.lottieAnimation} 
              source={require('@/assets/animations/getInsights.json')}
            />,
             title: <Text style={styles.onboardingTitle}>GET INSIGHTS</Text>,
            subtitle: 'Visualize your spending habits with simple charts',
          },
          {
            backgroundColor: "#E6F9FF",
            image:<LottieView 
              autoPlay 
              style={styles.lottieAnimation} 
              source={require('@/assets/animations/getControl.json')}
            />,
             title: <Text style={styles.onboardingTitle}>STAY IN CONTROL</Text>,
            subtitle: 'Set budgets and get alerts before overspending',
          },
  ]}
/>
    </View>
  );
}
