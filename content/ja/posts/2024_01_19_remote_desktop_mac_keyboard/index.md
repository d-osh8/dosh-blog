+++
title = 'Japanese keyboard setting when using Remote Desktop from Mac'
date = 2024-01-17T00:24:48+09:00
draft = false
description = ''
tags = ['Remote Desktop', 'Windows', 'Mac']
+++
日本語
1. Open Registory Editor

2. HKEY_LOCAL_MACHINE > SYSTEM > CurrentControlSet > Control > Keyboard > Layouts > 00000411

3. Change the LayoutFile from "KBDJPN.DLL" to "kbd106.dll"

Reference
https://hirogura.com/2023/02/14/post-61264/?e][]:;/.