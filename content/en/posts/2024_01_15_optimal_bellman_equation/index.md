+++
title = 'The convergence of the iteration of optimal bellman equation'
date = 2024-02-11T01:24:48+09:00
draft = false
description = ''
tags = ['Functional Analysis', 'Reinforcement Learning', ]
+++
<!-- 
{{< showimg >}}
cover.jpg
{{< /showimg >}} -->


{{< br >}}{{< /br >}}
Bellman equation plays a vital role in reinforcement learning.
{{< br >}}{{< /br >}}

<!-- 
{{< mathjax >}}
$$ 方策　\pi:状態ｓのもとでaを行う確率 $$
{{< /mathjax >}} -->


### Iterative Policy Evaluation

{{< mathjax >}}
$$$$
$$  V_{k+1}(s) = \sum_{a, s'} \pi(a|s) p(s'|s,a) \{ r(s, a, s') + \gamma V_{k}(s') \}$$
$$$$
{{< /mathjax >}}

{{< mathjax >}}

$$\begin{flalign} 
&V_{k}:\text{Value function after } k \text{ th iteration.}\
&
\end{flalign}$$

$$\begin{flalign} 
& \pi : \text{Policy. The probability of performing action } a \text{ under state } s. \
&
 \end{flalign}$$

$$\begin{flalign} 
& p: \text{Probability of the next state } s' \text{ under state } s \text{ and action } a.
&
\end{flalign}$$

$$\begin{flalign} 
& r: \text{Return under the state s, action a, and next state s'.}\
&
\end{flalign}$$

{{< /mathjax >}}
{{< br >}}{{< /br >}}


{{< br >}}{{< /br >}}
By iterating this update, it has been proven to converge to the true value function \\( v_{\pi}(s) \\) under policy \\( \pi \\).

<!-- この更新を繰り返せば方策πのもとでの真の価値関数vπ(s)に収束することが証明されている。 -->

{{< br >}}{{< /br >}}{{< br >}}{{< /br >}}{{< br >}}{{< /br >}}
{{< mathjax >}}
$$ E=mc^2 $$
$$ \frac{1}{2} \cdot (x + y) $$
$$ f(x) = x^2 $$
$$ x = 2 $$
$$\displaystyle \int_{-\infty }^{\infty}f(x)dx$$
$$ \lim_{n \to \infty} \frac{1}{n} = 0 $$
$$  V^*(s) = \max_a \left[ R(s, a) + \gamma \sum_{s'} P(s' | s, a) V^*(s') \right]  $$

$$\begin{align}
&a=x+y+z\
&b+c=w
\end{align}$$

$$\begin{flalign}
&a=x+y+z\
&b+c=w
\end{flalign}$$

{{< /mathjax >}}