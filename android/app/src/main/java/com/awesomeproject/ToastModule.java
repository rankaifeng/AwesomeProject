package com.awesomeproject;

import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ToastModule extends ReactContextBaseJavaModule {

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ToastExample";
    }

    @ReactMethod
    public void showTost(String msg) {
        Toast.makeText(getReactApplicationContext(), msg, Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void intentActivity(String activity, String msg) {
        Activity currentActivity = getCurrentActivity();
        if (null != currentActivity) {
            try {
                Class newActivity = Class.forName("com.awesomeproject.NewActivity");
                Intent intent = new Intent(currentActivity, newActivity);
                intent.putExtra("title", msg);
                currentActivity.startActivity(intent);
            } catch (ClassNotFoundException e) {
                throw new JSApplicationIllegalArgumentException(
                        "不能打开Activity : " + e.getMessage());
            }
        }

    }
}
