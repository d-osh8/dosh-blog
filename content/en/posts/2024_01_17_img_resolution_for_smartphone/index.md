+++
title = 'Set high resolution images for smart phone'
date = 2024-01-03T00:00:48+09:00
draft = false
description = ''
tags = ['hugo', 'html', 'css']
+++
{{< br >}}
{{< /br >}}
hugo example in this blog
{{< codeblock >}}
{{ $cover := .Fill "120x120 Center q100" }}
{{ $cover_2x := .Fill "240x240 Center q100" }}
{{ $cover_3x := .Fill "360x360 Center q100" }}

<img srcset="{{ $cover_2x.Permalink }} 2x, {{ $cover_3x.Permalink }} 3x" src="{{ $cover.Permalink }}">
{{< /codeblock >}}


Reference:{{< br >}}{{< /br >}}
https://web-creators-tips.com/matome/%e3%82%b9%e3%83%9e%e3%83%bc%e3%83%88%e3%83%95%e3%82%a9%e3%83%b3%e3%81%a7%e7%94%bb%e5%83%8f%e3%81%8c%e3%81%bc%e3%82%84%e3%81%91%e3%82%8b%e5%95%8f%e9%a1%8c%e3%81%ae%e7%b0%a1%e5%8d%98%e3%81%aa%e5%af%be/

https://creative.eccom.jp/922/