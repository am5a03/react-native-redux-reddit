package com.redditreactreduxnative.modules.cache;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.redditreactreduxnative.R;

import java.util.HashMap;
import java.util.Map;

public class SimpleCacheModule extends ReactContextBaseJavaModule {

    private static final String TAG = "SimpleCacheModule";
    private static final boolean DEBUG = true;
    private SharedPreferences mSharedPreferences;

    public SimpleCacheModule(ReactApplicationContext context) {
        super(context);
        mSharedPreferences = context.getSharedPreferences(context.getPackageName(), Context.MODE_PRIVATE);
    }

    /**
    * Name to be imported via JS
    */
    @Override
    public String getName() {
    return "SimpleCacheAndroid";
    }

    @Override
    public Map<String, Object> getConstants() {
     final Map<String, Object> constants = new HashMap<>();
     //constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
     //constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
     return constants;
    }

    /**
    * Annotation to expose this method to JS
    */
    @ReactMethod
    public void putString(String key, String value) {
        Log.d(TAG, "putString: key=" + key + ", value=" + value);
        SharedPreferences.Editor editor = mSharedPreferences.edit();
        editor.putString(key, value);
        editor.commit();
    }

    @ReactMethod
    public void getString(String key, Callback callback) {
        String val = mSharedPreferences.getString(key, "");
        Log.d(TAG, "getString: key=" + key + ", val=" + val);
        callback.invoke(val);
    }
}
