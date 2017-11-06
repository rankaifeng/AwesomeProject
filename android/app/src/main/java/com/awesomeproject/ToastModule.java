package com.awesomeproject;

import android.app.Activity;
import android.content.Intent;
import android.text.TextUtils;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
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

    /**
     * 跳转到新的activity
     *
     * @param activity
     * @param msg
     */
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

    @ReactMethod
    public void gotoJs(Callback successBack, Callback errorBack) {
        try {
            Activity currentActivity = getCurrentActivity();
            String name = currentActivity.getIntent().getStringExtra("name");
            if (TextUtils.isEmpty(name)) {
                name = "没有数据";
            }
            successBack.invoke(name);
        } catch (Exception e) {
            errorBack.invoke(e.getMessage());
        }
    }
}
