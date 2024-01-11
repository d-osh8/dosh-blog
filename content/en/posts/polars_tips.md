+++
title = 'Polars tips'
date = 2024-01-10T02:11:48+09:00
draft = false
+++
### Print DataFrame without omitting

{{< highlight go >}}
with pl.Config(tbl_rows=1, tbl_cols=100):
    print(df1)
    print(df2)
{{< /highlight >}}

{{< codeblock >}}
with pl.Config(tbl_rows=1, tbl_cols=100):
   print(df1)
   print(df2)
   print(df1)
   
   print(df2)
{{< /codeblock >}}

