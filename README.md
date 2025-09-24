# Sport Leagues Demo


## Build/Run

Steps - to run locally
1. `npm install`
2. `npm run dev`


## Design Decisions
* Tooling: Minimal React + Vite - linting rules are not perfect
* Component based - presentational components, avoided polluting them with state or API knowledge
* * As a refinement I would make a folder for each component to group files (e.g. css) and then expose via an index file
* State management - Given the scope of the app, I've kept this to container/component, using the App file to manage application state
* API integration - I've kept this encapsulated, and since I wasn't implementing React Query or similar, I just wrote simple caching myself. Error handling is very rudimentary and I haven't handled status codes or bad data


## AI Usage

I used ChatGPT 5 to assist with writing this, via the web UI not command line. I used it primarily for
* Searching current best practices to get simple React application bootstrapped
* ESLint configuration
* Code generation of the presentational components
* Refactoring assistance, e.g. at one point I knew I wanted to make my sequentially applied filters into predicates I could daisychain, and this was achieved more quickly using the AI

In short - I used ChatGPT primarily as a search engine and secondarily for quick options on how to achieve syntactically a design decision I had made myself. 


## Time Spent

I approached this task in two blocks of time, as you can see from the commit history, one of about 45 minutes and one of about an hour; so my total time is probably slightly over 90 minutes; but this was primarily due to having to arrange working on this around other commitments. I had fun working on it!