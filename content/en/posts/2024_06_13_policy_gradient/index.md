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

https://rail.eecs.berkeley.edu/deeprlcourse-fa18/static/slides/lec-5.pdf

  ≈ \frac{1}{n}
  
$$ \theta^* = \underset{\theta}{\operatorname{argmax}} J(\theta) $$
$$ \theta^* = \arg\max_{\theta} J(\theta)$$

$$ \theta^* = \mathop{\mathrm{arg\,max}}_{\theta} J(\theta) $$

comment -->

policy gradient {{< br >}}{{< /br >}}
https://rail.eecs.berkeley.edu/deeprlcourse-fa18/static/slides/lec-5.pdf
{{< br >}}{{< /br >}}
from{{< br >}}{{< /br >}}
https://rail.eecs.berkeley.edu/deeprlcourse-fa18/

lilian weng policy gradient{{< br >}}{{< /br >}}
https://lilianweng.github.io/posts/2018-04-08-policy-gradient/

The difference between policy based and value based{{< br >}}{{< /br >}}
https://www.reddit.com/r/reinforcementlearning/comments/mkz9gl/policybased_vs_valuebased_are_they_truly_different/

{{< mathjax >}}
$$  J(\theta) = E_{\tau ∼p_\theta(\tau)} \left[ \sum_{t}r(s_t, a_t) \right]$$

$$ \theta^* = argm\underset{\theta}ax J(\theta) $$
{{</ mathjax >}}

Object function   \\( J(\theta)\\) is the expected return of a policy parameterized by \\( \theta \\).
{{< br >}}{{< /br >}}
\\( \tau∼p_\theta(\tau) \\) means that the trajectory 
\\( \tau \\) is sampled from the distribution 
\\( p_\theta(\tau) \\).
How to update the policy parameters \\( \theta \\) ?
First, we take the derivative of \\( J(\theta)\\)

{{< mathjax >}}
$$
\nabla_\theta \ J(\theta) 
= \nabla_\theta \ E_{\tau ∼p_\theta(\tau)} \left[ \sum_{t}r(s_t, a_t) \right]
$$
$$
= \nabla_\theta \ E_{\tau ∼p_\theta(\tau)} \left[ r(\tau) \right]
$$
$$
= \nabla_\theta \displaystyle \int p_\theta(\tau) \ r(\tau)d\tau
$$
$$
= \displaystyle \int \nabla_\theta \ p_\theta(\tau) \ r(\tau)d\tau
$$
$$
= \displaystyle \int p_\theta(\tau) \frac{\nabla_\theta \ p_\theta(\tau)}{p_\theta(\tau)} \ r(\tau)d\tau
$$
$$
= \displaystyle \int p_\theta(\tau) 
\ \nabla_\theta \log p_\theta(\tau) \ r(\tau)d\tau
$$
$$
= E_{\tau ∼p_\theta(\tau)} \left[ \nabla_\theta \log p_\theta(\tau) \ r(\tau) \right]
$$
{{</ mathjax >}}

<!--
It doesn't have to be in math jax  
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