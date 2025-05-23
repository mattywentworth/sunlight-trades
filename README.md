# Sunlight Trades

For now, Sunlight Trades is hosted at: https://sunlight-trades.netlify.app/

Sunlight Trades is a work in progress.


## Description

Sunlight Trades is simple. The purpose is to provide an immutable record of why you make your investing decisions, along with an AI review of each decision you make.

Did you just buy shares of Apple? In Sunlight Trades, you must log your confidence level in Apple as an investment and your investment thesis at the time of purchase. ChatGPT will analyze your thesis and identify strengths and weaknesses of your thesis with a focus on potential psychological pitfalls in your decision-making.

Fast-forward a few days, a week, or more. Did your confidence level change for some reason? Maybe Americans are protesting Apple for having so much of their manufacturing overseas. Perhaps the price of shares in Apple is falling, and your confidence in the investment has fallen some, but you decide to hold. Update your confidence level and thesis in Sunlight Trades, and see the AI analysis of your updated thesis.

Maybe you're making sound decisions, and you're reassured. Or maybe you're alerted to some weaknesses in your reasoning, and the added perspective convinces you that you should sell instead of hold.

In that case, log your new confidence level and thesis, and register in Sunlight Trades that you've sold the asset.

If you decide to purchase Apple again in the future, you'll see a log of all of your prior confidence levels and investment theses. This extra accountability will help you make decisions more consistently and based off of more sound information.

And it will help you avoid fabricating stories. Maybe you invested in Palantir in 2022, and you're sitting on a 10x return. It would be easy to tell yourself that you're an investing wizard. But what if you could check your Sunlight Trades account and see that the only reason you bought it was because people on Reddit were saying it was the next big thing. You didn't know anything about the company. You just didn't want to feel any FOMO if it happened to take off.

As long as you provide honest input, Sunlight Trades helps you understand what's really driving your investment decisions. That way you can more reliably repeat what you're doing right and avoid repeating what you're doing wrong.


## Technologies

- Javascript, including React and Redux
- HTML
- CSS
- Netlify for temporary hosting


## Lessons Learned

In most cases, I prioritized speed while building this project. For example, there were some times when I created more React components than were likely necessary, because focusing on DRYing the code would have taken longer than creating a new, slightly different, component. In the long-run, this supposed focus on speed may have taken more time.

I had a plan going into building the project, but I could have taken more time defining the initial scope and defining stages of functionality to implement. Without a more detailed scope and stages, I would frequently get bogged down in minor tasks that were important to me but weren't necessarily serving the broader purpose. For example, I didn't initially consider how visually unappealing records of assets are without a company logo appearing alongside them. When I saw company information being displayed without a logo, I got fixated on finding a way to fetch and display logos. While not technically complex, the solution didn't initially work as expected and consumed a lot of time. This was important to do in the long-run but didn't initially serve my primary purpose of building out useful functionality.

Despite not being a designer, I have high expectations of myself. So when something doesn't look great, I get fixated on it and spend too much time trying to come up with my own improvements to it. Instead of taking time trying to conceive my own beautiful designs, I should find a design to imitate, establish an initial design system, and commit to using that for as long as it fits my project. Otherwise, I spend too much time trying to come up with something beautiful and perfect and not coming anywhere close to that goal.

Speaking of styling, my goal was to thoughtfully use CSS variables to make edits to components faster and easier. While I did make use of some CSS variables, I did so less and less as the project continued. And I realized that I should do some more reading on how to properly use them so that future styling is more efficient.


## Pros

Conceptually, I think Sunlight Trades addresses a giant problem in the investing world. There are plenty of brokerage apps and stock tracking apps. Admittedly, I didn't reasearch the existence of "stock journals" or "accountability journals," but it's a somewhat surprising gap in the major brokerage apps.

The project delivers the main functions I wanted to build:
- Requiring a confidence level and thesis at the time of purhcasing shares in a company
- Requesting analysis of the thesis from ChatGPT
- Displaying the thesis and AI anlaysis of the thesis when viewing the investment
- Requiring an update to the confidence level and thesis each time some update is made (hold, sell, buy) and displaying another AI analysis of the updated thesis and decision

## Cons

Right now, the project does not have a backend. State is stored using Redux, so any updates are deleted when the page is refreshed.

The structure of state in Redux for tracking investments seems like it's overly complex. Granted, this may be ok in the current iteration of the project, because the long-term goal is to add a backend that properly stores user accounts and corresponding data.

Accessibility is really important to me. While I was initially building components, I focused more on speed than using semantically correct HTML elements. And I haven't reviewed all of the HTML to ensure that it is written in an accessible way. I also haven't checked the HTML to determine if ARIA roles may be necessary to create a more accessible experience.

The design leaves plenty to be desired. I haven't resolved some styling issues, like the column width on the table that displays assets in a user's portfolio.

I "tested" the JavaScript while I was building this project, but for the sake of speed, I didn't write any formal tests.

While I don't plan to add a brokerage element, a productized version of Sunlight Trades would need to have a brokerage function or integrate with brokerage services. Otherwise, the act of manually logging the details of each transaction in Sunlight Trades requires a level of effort and conscientiousness froom users that would create a poor user experience.