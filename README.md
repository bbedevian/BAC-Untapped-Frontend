Welcome! 
This is the front end of my app "BAC Untapped".
It is written in React Native and has, at the moment, only been tested on an android emulator. 

to do Redux Refactor: 
- Set current user 
    - rework login signup 
    - async userbeers method 
- user beers actions, selector, types, reducer

In order to get this up and running you need 2 things:
1) the backend! it can be found here https://github.com/bbedevian/BAC-Untapped-Backend
2) An Untappd API key and secret. This is required for the backend to perform the search properly.

Since this API key is not as simple to get, you can view a working demo of the app right here: https://www.youtube.com/watch?v=YWTFZUWuOXw&t=7s

Overview:
- A user can create or log in to an account.
- Account is tied to all "check ins" to beers which can be seen in the history page.
- These check ins are also utilized in the analytics page where stats like average # of check ins per day can be seen
- User can log a new beer by clicking big blue log button. From there they will be taken to the search page where the input gets sent to the Untappd API endpoint to generate a list of all results that match the users search.
- User can then select one of the results and choose a serving size at which point a beer can be logged. 
- The "Visualizer" lives on the home page and contains 2 containers (haha that sounds funny).
1) an overview of users current BAC, estimated time until sober(herein reffered to as TTS), and number of calories. These are all calculated in the visualizer component. I used the Widmark formula for BAC and a simple 2.5 times the alcohol % times amount consumed for the calories, a formula I got from my friend Brian.
2) the React Native Chart Kit representation of the users current BAC and TTS. 
The TTS is calculated by totalling each beers BAC state which you can get by subtracting .015 times the number of hours since it was drank. 

I am happy with hour this turned out and would love to take it further in the near future. 
Things planned to iplement: 
- Allow users to check in to Untappd social network from my app. 
- Refactor using redux state management. I think this would clean up the code a considerable amount. 

