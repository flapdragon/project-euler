
# Project Euler

[![GitHub last commit](https://img.shields.io/github/last-commit/flapdragon/Project-Euler.svg)](https://github.com/flapdragon/project-euler/commits/master)
[![License](https://img.shields.io/github/license/flapdragon/project-euler.svg)](https://github.com/flapdragon/project-euler/blob/master/LICENSE)
[![Languages count](https://img.shields.io/github/languages/count/flapdragon/Project-Euler.svg)]()
[![Top Language](https://img.shields.io/github/languages/top/flapdragon/Project-Euler.svg)]()

Working through the [Project Euler](https://projecteuler.net/) problem set. I am grateful to [Mr. Euler](https://en.wikipedia.org/wiki/Leonhard_Euler) :mage: for maintaining this website for over 300 years now and I'm sure he's probably more than a little tired.

I do not know the math so almost always my first approach is brute force and iteration, because I am full monke programmer.

Once I have my humble approach, only then do I look at the description and solution from Project Euler. When I implement the Euler solution there is always a flabbergasting performance improvement as I squint at the math and my original function struggles to finish.

I take it as an opportunity to learn the math behind the answer. Sometimes this takes considerably longer for me than learning a programming concept but I hope to find more and more uses for the math in my personal and professional programming.

## Setting Up the Project

In case you missed it this code is in JavaScript. To run it you will need to install [Node.js](https://nodejs.org/en/) unless you can just execute it with your mind :brain:.

### Run it with Node
If you're not using your brain, open a terminal/console/command prompt/powershell/dark window into the nether and type:

```
# Navigate to wherever you downloaded the project and specific problem folder you are trying to run
cd to/the/folder/problem-01
# Run it with Node
node index.js
```

### Run it in the browser with http-server
If you prefer a big blank browser tab and looking at its guts in the dev tools you can install [http-server](https://www.npmjs.com/package/http-server), or any other local web server, but I'm using the really convenient [http-server](https://raw.githubusercontent.com/http-party/http-server/master/screenshots/public.png) for this project because it's got a turtle. I recommend installing it globally which means it will be available anywhere credit cards are accepted.

```
npm install --global http-server
# Or if you're one of those smart kids in class that everyone hates
npm i -g http-server
# Then traverse to the main project directory if you haven't already
cd to/the/folder/
http-server
```
Once the server is running open a browser and go to http://localhost:8080/problem-0001/index.html. You will need to include the problem folder in the path because you started the server from the project root, which is normal, and you will need to include the filename (index.html). Even though it says it defaults to index.html it doesn't always work. Or ever. That's OK I love you turtle :turtle:

## I got 751 Problems but Euler Ain't 1 Hit Me

|Problem|Solution|
|---|---|
|[Multiples of 3 or 5](https://projecteuler.net/problem=1)|[Solutions](problem-0001)|
|[Even Fibonacci numbers](https://projecteuler.net/problem=2)|[Solutions](problem-0002)|
|[Largest prime factor](https://projecteuler.net/problem=3)|[Solutions](problem-0003)|
|[Largest palindrome product](https://projecteuler.net/problem=4)|[Solutions](problem-0004)|
