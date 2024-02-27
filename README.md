https://dev.to/arisa_dev/gatsby-tailwindcss-integrate-dark-mode-in-10-minutes-1p2c?fbclid=IwAR3IjD5K6GgEYgtSV00xAa-NPmtBagADldUVAq9wpcIGxEPLWxyr4H0-180


# todo 


1) make layout for profile page 
2) finish UI for the GameModes dialog
3) dark mode themes
4) game modes dialog needs to fit on mobile
5) handle loading state when waiting for the cards on the home screen (skeleton?)
6) loading skeletons for board
7) tidy up daily shuffle code
8) classic shuffle and lite shuffle modes set up
9) play once per day
10) homescreen does not fit on the page
11) games mode dialog isn't mobile friendly, let's use our modal system instead

# future work

1. fix darkmode styles completely and add toggle switch (shadCN) to the settings screen
2. integrate full sign in flow and make app cohesive
3. Save scores to online database 
4. Use python API and write Facts endpoint with chat gtp-3 
5. investigate how we could share a shuffle code
6. Leaderboards & Auth
7. Bring back points
8. Analytics tracking
9. https://ui.aceternity.com/components
10. build a landing page?

## ARCHIVE: 


### 26th feb

1) fix build issue on redux store initialization (40 mins)
2) translate routing to Gatsby browser vs pages API & validate (10 mins)
3) Add icons and configure homescreen buttons (20 mins)
4) Implement game modes dialog popup on main menu (30 mins)
5) Simplify the stats modal (5 mins)
6) integrate login/register pages to the main app routes (10 mins)
7) fix the basic UI to prevent headerer loading pop (10 mins)
8) Address correct turns 1 turn over bug (10 mins)
9) game state isRunning boolean tracked in store instead of local state (10 mins)
10) Refactor time played in modals to account for seconds instead of miliseconds (10 mins)


### 25th feb

1) Refactor copyToClipboard to a custom hook
2) fix header logo to correct image 
3) fix local storage but lets tidy up a new line per game mode
4) update modals to pull from redux instead of localStorage
5) need to get stats modal to access the difficulty selected in the mode i.e. gameStats['gameDifficulty'].bestTurns (currently hardcoded to daily shuffle)
6) Can we set our initial bestScores data from redux as well? 
7) need to update the historic stats on game completion as well, not just on first render
8) Analyse current codebase backlog
9) Refactored reusable code to global utils

 ### 24th feb
1) lets create .styles.ts files and move our styled components to seperate files. - DONE 
2) Tidy up the board and header components - DONE
3) Upgrade the share functionality to use the naviagtor API - DONE neeeds testing
4) can we track current game time using redux? - DONE
5) Fully integrate a modal register - WIP - Need to swap all current now undefined set calls to instead call for the dispatch-DONE
6) Prevent info modal being accidentally closed - DONE
7) can we remove 'time' as useState completely from Board?  -DONE 
8) set up routing - Actually have pages in the right place! 
9) Create a routes folder/hooks folder of navigate to - needs implementing 
10. Add game modes dialog  - DONE
11) add github link - DONE
12) can I trigger the modals using redux?? - DONE
13) todo use folder structure from VP - DONE 
14) fix remaining modals - done
15) Clean up accessing store selectors pattern - solved using two hooks - DONE