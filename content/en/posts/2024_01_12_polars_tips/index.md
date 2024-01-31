+++
title = 'Polars tips'
date = 2024-01-21T01:11:48+09:00
draft = false
tags = ['polars']
+++
<!-- 
{{< showimg >}}
cover2.jpg
{{< /showimg >}} -->
<!-- ![hogehogehoge](cover2.jpg) -->
### Print DataFrame without omitting

{{< highlight go >}}
with pl.Config(tbl_rows=1, tbl_cols=100):
    print(df1)
    print(df2)
{{< /highlight >}}

{{< codeblock >}}
with pl.Config(tbl_rows=1, tbl_cols=100):
   print(df)
{{< /codeblock >}}

{{< codeblock >}}
df = df.unique(subset=["datetime"])
{{< /codeblock >}}

polars
polars
polars
polars

polarspolars
polars
polars
polars
polars
polars
