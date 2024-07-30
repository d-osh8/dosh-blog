+++
title = 'Mean Variance Optimization'
date = 2024-07-30T00:00:01+09:00
draft = false
tags = ['finance']
+++
<!-- 
{{< showimg >}}
cover2.jpg
{{< /showimg >}} -->
<!-- ![hogehogehoge](cover2.jpg) -->

Mean Variance Optimization (MVO) is a well-established but rigorous technique used in managing financial portfolios. However, the covariance calculated by MVO often contains estimation errors. To address this, the Ledoit-Wolf Shrinkage operator is frequently recommended. This approach is used as a baseline in this paper(https://icaps23.icaps-conference.org/papers/finplan/FinPlan23_paper_4.pdf) First, I will explain Mean Variance Optimization, and then I will discuss the Ledoit-Wolf Shrinkage operator, which is an improved version of MVO.

### Minimize risks(variances) by given returns
{{< codeblock >}}
import numpy as np
import yfinance as yf
import scipy.optimize as sco

# Fetch historical data
tickers = ['AAPL', 'MSFT']# , 'GOOGL', 'AMZN']
data = yf.download(tickers, start='2020-01-01', end='2021-01-01')['Adj Close']

# Calculate daily returns
returns = data.pct_change().dropna()

# Define the objectives
def portfolio_return(weights, returns):
    return np.sum(weights * returns.mean(axis=0))

def portfolio_variance(weights, returns):
    cov_matrix = np.cov(returns, rowvar=False)
    return np.sqrt(np.dot(weights.T, np.dot(cov_matrix, weights)))

# Define the constraint (target return)
def return_constraint(weights, returns, target_return):
    portfolio_return = np.sum(weights * returns.mean())
    return portfolio_return - target_return

# Initial guess for the weights
initial_guess = np.array([0.5, 0.5]) # 
# initial_guess = np.array([0.25, 0.25, 0.25, 0.25])

# Bounds for the weights (between 0 and 1)
bounds = tuple((0, 1) for _ in range(returns.shape[1]))

print(returns.mean())
# Perform the optimization for different target returns
target_returns = np.linspace(0, returns.mean().max(), 30)
optimal_portfolios = []

for target_return in target_returns:
    constraints = (
        {'type': 'eq', 'fun': lambda x: np.sum(x) - 1},  # sum of weights is 1
        {'type': 'eq', 'fun': return_constraint, 'args': (returns, target_return)}  # target return
    )
    result = sco.minimize(portfolio_variance, initial_guess, args=(returns,), method='SLSQP', bounds=bounds, constraints=constraints)
    optimal_portfolios.append((result.x, portfolio_return(result.x, returns), result.fun))
    print(result.x)

# Extract the results
weights, returns, variances = zip(*optimal_portfolios)
import matplotlib.pyplot as plt

# Plot the efficient frontier
plt.plot(variances, returns, 'o', markersize=5)
plt.xlabel('Risk (Variance)')
plt.ylabel('Return')
plt.title('Efficient Frontier')
plt.show()

{{< /codeblock >}}

{{< br >}}{{</ br>}}

{{< showimg >}}
images/multi_minimize_risks.jpg
{{< /showimg>}}

{{< br >}}{{</ br>}}
### Maximize returns by given risks(variances)
{{< codeblock >}}
import numpy as np
import yfinance as yf
import scipy.optimize as sco

# Fetch historical data
tickers = ['AAPL', 'MSFT']# , 'GOOGL', 'AMZN']
data = yf.download(tickers, start='2020-01-01', end='2021-01-01')['Adj Close']

# Calculate daily returns
returns = data.pct_change().dropna()

def portfolio_return(weights, returns):
    return np.sum(weights * returns.mean(axis=0))

# Define the objective function (negative portfolio return)
def neg_portfolio_return(weights, returns):
    return -np.sum(weights * returns.mean())

# Define the constraint (target variance)
def variance_constraint(weights, returns, target_variance):
    portfolio_variance = np.sqrt(np.dot(weights.T, np.dot(returns.cov(), weights)))
    return portfolio_variance - target_variance

# Initial guess for the weights
initial_guess = np.array([0.5, 0.5]) # 
# initial_guess = np.array([0.25, 0.25, 0.25, 0.25])

# Bounds for the weights (between 0 and 1)
bounds = tuple((0, 1) for _ in range(returns.shape[1]))

print(returns.cov().max().max())
# Perform the optimization for different target returns
target_risks = np.linspace(0.02, 0.03, 30)
optimal_portfolios = []

for target_risk in target_risks:
    constraints = (
        {'type': 'eq', 'fun': lambda x: np.sum(x) - 1},  # sum of weights is 1
        {'type': 'eq', 'fun': variance_constraint, 'args': (returns, target_risk)}  # target return
    )
    result = sco.minimize(neg_portfolio_return, initial_guess, args=(returns,), method='SLSQP', bounds=bounds, constraints=constraints)
    optimal_portfolios.append((result.x, portfolio_return(result.x, returns), target_risk))
    print(result.x)

# Extract the results
weights, returns, variances = zip(*optimal_portfolios)

import matplotlib.pyplot as plt

# Plot the efficient frontier
plt.plot(variances, returns, 'o', markersize=5)
plt.xlabel('Risk (Variance)')
plt.ylabel('Return')
plt.title('Efficient Frontier')
plt.show()
{{< /codeblock >}}

{{< br >}}{{</ br>}}

{{< showimg >}}
images/multi_maximize_returns.jpg
{{< /showimg>}}

{{< br >}}{{</ br>}}
### Objective Function for Maximizing the Sharpe Ratio
{{< codeblock >}}
import numpy as np
import yfinance as yf
import scipy.optimize as sco

# Fetch historical data
tickers = ['AAPL', 'MSFT', 'GOOGL', 'AMZN']
data = yf.download(tickers, start='2023-01-01', end='2024-01-01')['Adj Close']

# Calculate daily returns
returns = data.pct_change().dropna()

# Function to calculate portfolio statistics
def portfolio_stats(weights, returns):
    portfolio_return = np.sum(weights * np.mean(returns, axis=0)) * 252  # Annualize return
    portfolio_volatility = np.sqrt(np.dot(weights.T, np.dot(np.cov(returns.T) * 252, weights)))  # Annualize volatility
    return portfolio_return, portfolio_volatility

# Objective function to minimize (negative Sharpe ratio)
def neg_sharpe_ratio(weights, returns, risk_free_rate=0.0):
    portfolio_return, portfolio_volatility = portfolio_stats(weights, returns)
    sharpe_ratio = (portfolio_return - risk_free_rate) / portfolio_volatility
    return -sharpe_ratio

# Constraints and bounds
constraints = ({'type': 'eq', 'fun': lambda x: np.sum(x) - 1})  # Sum of weights must be 1
bounds = tuple((0, 1) for _ in range(returns.shape[1]))  # Weights between 0 and 1

# Initial guess (equal weights)
initial_guess = returns.shape[1] * [1. / returns.shape[1]]

# Optimization
result = sco.minimize(neg_sharpe_ratio, initial_guess, args=(returns,), method='SLSQP', bounds=bounds, constraints=constraints)

# Optimal weights
optimal_weights = result.x
portfolio_return, portfolio_volatility = portfolio_stats(optimal_weights, returns)

print(f"Optimal weights: {optimal_weights}")
print(f"Expected portfolio return: {portfolio_return}")
print(f"Expected portfolio volatility: {portfolio_volatility}")
print(f"Optimal Sharpe ratio: {-result.fun}")

{{< /codeblock >}}

--result--
Optimal weights: [0.61715226 0.19945779 0.         0.18338995]
Expected portfolio return: 0.5027272552587326
Expected portfolio volatility: 0.19623102216731403
Optimal Sharpe ratio: 2.5619152859025944

