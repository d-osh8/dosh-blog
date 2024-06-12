+++
title = 'Policy gradient'
date = 2024-06-12T01:24:48+09:00
draft = false
description = ''
tags = ['Reinforcement Learning']
+++
<!-- 
{{< showimg >}}
cover.jpg
{{< /showimg >}} -->

<!-- comment -->
{{< br >}}{{< /br >}}
<!-- 
Hi!
Don't you know how sweet the policy gradient tastes?
https://rail.eecs.berkeley.edu/deeprlcourse-fa18/static/slides/lec-5.pdf

  ≈ \frac{1}{n}
comment -->
{{< mathjax >}}
$$  J(\theta) = E_{\tau ∼p_\theta(\tau)} \left[ \sum_{t}r(s_t, a_t) \right]$$

$$ \theta^* = \underset{\theta}{\operatorname{argmax}} J(\theta) $$
$$ \theta^* = \arg\max_{\theta} J(\theta)$$

$$ \theta^* = \mathop{\mathrm{arg\,max}}_{\theta} J(\theta) $$

{{</ mathjax >}}

Object function   \\( J(\theta)\\) is the expected return of a policy parameterized by \\( \theta \\).
{{< br >}}{{< /br >}}
\\( \tau∼p_\theta(\tau) \\) means that the trajectory 
\\( \tau \\) is sampled from the distribution 
\\( p_\theta(\tau) \\).

<!--
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