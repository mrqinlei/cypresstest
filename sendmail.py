#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time    : 2022/7/26 10:37
# @File    : sendmail.py
import mimetypes
import smtplib
from email import encoders
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
import time
import zipfile
import os
import importlib,sys 

def file_tozip():
    startdir = "mochawesome-report"  # 要压缩的文件夹路径
    file_news = 'mochawesome-report.zip'  # 压缩后文件夹的名字
    z = zipfile.ZipFile(file_news, 'w', zipfile.ZIP_DEFLATED)  # 参数一：文件夹名
    for dirpath, dirnames, filenames in os.walk(startdir):
        fpath = dirpath.replace(startdir, '')  # 不replace的话，就从根目录开始复制
        fpath = fpath and fpath + os.sep or ''  # 实现当前文件夹以及包含的所有文件的压缩
        for filename in filenames:
            z.write(os.path.join(dirpath, filename), fpath + filename)
    print(u'压缩成功')
    z.close()


def send_report():
    filepath = "mochawesome-report.zip"
    smtp_server = "smtp.exmail.qq.com"
    username = "qinlei@ezone.work"
    password = "xxx"
    sender = username
    # receivers = ["xxxxxxx","xxxxxxx","xxxxxxx"]  # 接收人
    receivers = ['xxx@qq.com']
    current_time = time.strftime('%Y-%m-%d-%H-%M-%S', time.localtime(time.time()))
    msg = MIMEMultipart()
    # 邮件正文
    # msg.attach(MIMEText("Hi，All:"
    #                     "\n  test环境自动化脚本测试工具{}已经完成测试报告见附件"
    #                     "\n  账号:admin 密码:admin123123"
    #                     "\n  目前以实现测试环境27条用例数."
    #                     "\n  测试环境地址:{}".format(current_time, 'http://test321.ezone-test.work'), 'plain', 'utf-8'
    #                     ))
    msg.attach(MIMEText("""
                            <p>test环境自动化脚本执行完毕测试报告见附件,目前已实现测试环境35条用例数。</p>
                            <p>账号:admin 密码:admin123123</p>
                            <p><a href="http://abc.ezone-test.work">测试环境地址</a></p>
                            <p><a href="./mochawesome-report/merge-report.html">测试报告链接暂不可用</a></p>
                            """, 'html', 'utf-8'
                        ))
    msg['From'] = sender
    msg['To'] = ";".join(receivers)  # 多个收件人list转str

    subject = "{}的自动化测试报告".format(current_time,"utf-8")
    msg['Subject'] = subject

    data = open(filepath, 'rb')
    ctype, encoding = mimetypes.guess_type(filepath)
    if ctype is None or encoding is not None:
        ctype = 'application/octet-stream'
    maintype, subtype = ctype.split('/', 1)
    file_msg = MIMEBase(maintype, subtype)
    file_msg.set_payload(data.read())
    data.close()
    encoders.encode_base64(file_msg)  # 把附件编码
    file_msg.add_header('Content-Disposition', 'attachment', filename="test.zip")  # 修改邮件头
    msg.attach(file_msg)
    try:
        server = smtplib.SMTP(smtp_server, 25)
        server.login(username, password)
        server.sendmail(sender, receivers, msg.as_string())
        server.quit()
        print("发送成功")
    except Exception as err:
        print("发送失败")
        print(err)


if __name__ == '__main__':

        file_tozip()
        send_report()
