package com.awesomeproject;

import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.widget.TextView;

public class NewActivity extends Activity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.new_activity);
        String title = getIntent().getStringExtra("title");
        TextView tvShow = (TextView) findViewById(R.id.tv_show);
        tvShow.setText(title);
    }
}
