package com.yyl;
import android.os.Bundle; // here
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {


    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */

    protected String getMainComponentName() {
        return "yyl";
    }
}
