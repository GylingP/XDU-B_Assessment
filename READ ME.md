#### 前端部署

将./dist.zip上传到php项目根目录并解压，将解压内容覆盖粘贴至项目根目录，入口为index.html

![image-20240507105346262](C:\Users\gylin\AppData\Roaming\Typora\typora-user-images\image-20240507105346262.png)

在设置>>配置文件中粘贴以下配置，从最后一个include结束到access_log开始之间覆盖粘贴。

![image-20240507105544650](C:\Users\gylin\AppData\Roaming\Typora\typora-user-images\image-20240507105544650.png)

![image-20240507105712516](C:\Users\gylin\AppData\Roaming\Typora\typora-user-images\image-20240507105712516.png)

```nginx
 location / {
    try_files $uri $uri/ /index.html;
}
    #禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.env|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }

    #一键申请SSL证书验证目录相关设置
    location ~ \.well-known{
        allow all;
    }

    #禁止在证书验证目录放入敏感文件
    if ( $uri ~ "^/\.well-known/.*\.(php|jsp|py|js|css|lua|ts|go|zip|tar\.gz|rar|7z|sql|bak)$" ) {
        return 403;
    }

    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    {
        expires      30d;
        error_log /dev/null;
        access_log /dev/null;
    }

    location ~ .*\.(js|css)?$
    {
        expires      12h;
        error_log /dev/null;
        access_log /dev/null;
    }
```

#### 后端部署

将./smog-back.zip上传到任意文件目录下并解压。

新建python项目。若无python请下载python3.8.5

![image-20240507105942049](C:\Users\gylin\AppData\Roaming\Typora\typora-user-images\image-20240507105942049.png)

其中路径地址为刚刚解压后的地址，运行文件为其中的app.py，其他保持一致。

点击项目右侧的“模块”按钮，下载依赖

![image-20240507110057554](C:\Users\gylin\AppData\Roaming\Typora\typora-user-images\image-20240507110057554.png)

需要下载的依赖有flask,flask-cors,pymysql.

#### 数据库部署

新建mysql数据库。数据库名recs，用户名admin，密码5KP6eHGt4nkwW748。

点击管理进入phpMyAdmin，在sql中执行以下代码。

```mysql
create table recs.rec(
	id bigint primary key,
   record_date datetime,
   location varchar(100),
	weather json,
   air json
);
```

#### 服务器配置

请在安全组中放行80(http),443(https),5590(flask),3306(mysql)