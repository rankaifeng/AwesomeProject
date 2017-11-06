package com.awesomeproject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class NewActivity extends Activity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.new_activity);
        String title = getIntent().getStringExtra("title");
        TextView tvShow = (TextView) findViewById(R.id.tv_show);
        tvShow.setText(title);

        Button btnCallBack = (Button) findViewById(R.id.btn_callback);
        btnCallBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mIntent = new Intent(NewActivity.this, MainActivity.class);
                mIntent.putExtra("name", "我是来自Android的消息");
                startActivity(mIntent);
                NewActivity.this.finish();
            }
        });
    }
}
