---
slug: wecomlocal
title: 修复Windows 11 N系统下企业微信私有部署版无法打开的问题
tags: [troubleshoot]
---

众所周知，Windows 10/11 N 系列是微软应欧盟要求而删除内置媒体组件的系统版本。正好最近需要重装系统，出于猎奇的心态，我安装了 Windows 11 Pro N 系统。

然而，我司使用企业微信私有版，这似乎是在我司本地部署的一种企业微信，安装后竟然无法打开。

*这里应该有一张图，稍后上传。*

排查了许久，不知道是依赖问题还是什么系统组件问题，一天的徒劳无功后突然想起来 N 系统和普通版系统的最表面的区别就是去掉了媒体组件，而我过去的普通版系统是能够运行企业微信私有版的。

于是打开 Settings -> System -> Optional features -> View features 搜索媒体功能包，结果安装失败。

搜索了 Microsoft Q&A 得到了解决方案如下

```
Open an admin PowerShell or Command Prompt.

Run: DISM /Online /Add-Capability /CapabilityName:Media.WindowsMediaPlayer~~~~0.0.12.0

Crucially, after this, reboot your computer.

After the reboot, try installing the Media Feature Pack: DISM /Online /Add-Capability /CapabilityName:Media.MediaFeaturePack~~~~0.0.1.0
```

以管理员权限打开终端（PowerShell和CMD都可以）

首先运行 ``DISM /Online /Add-Capability /CapabilityName:Media.WindowsMediaPlayer~~~~0.0.12.0``

然后重启电脑，再次以管理员权限打开终端

运行 ``DISM /Online /Add-Capability /CapabilityName:Media.MediaFeaturePack~~~~0.0.1.0``

最后再重启一次，问题解决。

以上。