<?php
    require_once "Smtp.class.php";

    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $emailMsg = "非法邮箱格式";
    } else {
      //******************** 配置信息 ********************************
      $smtpserver = "smtp.qq.com";//SMTP服务器
      $smtpserverport =25;//SMTP服务器端口
      $smtpusermail = "2547343010@qq.com";//SMTP服务器的用户邮箱
      // $smtpemailto = $_POST['toemail'];//发送给谁
      $smtpemailto = "contact@hangkei.ai";//发送给谁
      // $smtpemailto = "417140897@gmail.com";//发送给谁
      $smtpuser = "2547343010@qq.com";//SMTP服务器的用户帐号，注：部分邮箱只需@前面的用户名
      $smtppass = "muhdkflerkkaebfg";//SMTP服务器的授权码
      // $mailtitle = $_POST['subject'];//邮件主题
      $mailtitle = "homepagemessage";//邮件主题
      // $mailtitle = "=?UTF-8?B?".base64_encode($mailtitle)."?=";
      // $mailcontent = $_POST['message'];//邮件内容
      $mailcontent = "Subject: ".$_POST['subject']."<br>Message: ".$_POST['message']."<br>Name:  ".$_POST['name']."<br>Email: ".$_POST['email'];//邮件内容
      $mailtype = "HTML";//邮件格式（HTML/TXT）,TXT为文本邮件

      //************************ 配置信息 ****************************
      $smtp = new Smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass);//这里面的一个true是表示使用身份验证,否则不使用身份验证.
      $smtp->debug = false;//是否显示发送的调试信息
      $state = $smtp->sendmail($smtpemailto, $smtpusermail, $mailtitle, $mailcontent, $mailtype);

      echo "<div style='width:300px; margin:36px auto;'>";
      if($state==""){
          echo "对不起，邮件发送失败！请检查邮箱填写是否有误。";
          echo "<a href='index.html'>点此返回</a>";
          exit();
      }
      echo "恭喜！邮件发送成功！！";
      echo "<a href='index.html'>点此返回</a>";
      echo "</div>";
    }
    echo $emailMsg;



?>
