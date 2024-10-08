## Change log: 


### 29th/30th Aug 
1) fix bug resulting in incorrect copytoclipboard values
2) track game difficulty using redux
3) simplified score tracking
4) Trialed fix for cards not loading propperly when rendered on Lite and Classic modes on hard page reload
5) Small fix to reset disabled cards on game reset

### 22nd Aug 

1) flip cards button is dependant on global loading state set by redux to support sync with card fetching in daily shuffle
2) Pre, Post game modals now moved to the board component to redux number of redux errors associated with passing functions through redux
3) Small code improvements 
4) Updated the game mode tile to close on click
### 15th May 

1) Handled more modal logic (copyToClipboard, type improvements)
2) Handled NaN edgecase on empty scores
3) Minor board bug fixes
4) Daily shuffle completed already score display logic
5) Small redux fixes and small UI fixes. 

### 9th May 

1) Implement functionality pre-game modal across game modes
2) Modals further implemented

### undated

4) start timer on card flip - DONE
3) disable the flip cards button with global loading state. - DONE
6) head tags (SEO) / analytics tags (tracking) integration - @Matt input pending  - DONE
10) make layout for profile page! - parked

### 28th March

1) Update score calculation (10 mins)
2) Fix banner size breaking CSS
3) Update copy to clipboard messaging

### 26th March

1) Update copy on how to play modal (5 mins)
 

### 21st March

1) update the routes - (40 mins)

### 10th March 

1) Update latest scores received in the playedToday Modal on daily shuffle - (30 mins)
2) Add open graph tags for better sharing on social media - (45 mins)
3) Setup Classic/Daily shuffle & bug fixing (60 mins)
4) Vercel deployment and build troublshooting (90 mins)

### 2nd MARCH

1) Ammend stats modal bug

### 1st March - 45 mins 

1) Integrate hasPlayedToday boolean into redux store

### 29th feb - 45 mins 

1) Refactor game score calculation to utils folder - (15 mins)
2) Refactor Utils folder to remove redundant code - (15 mins)
3) Configure ESLint and project linting rules including regression test  - (15 mins)

### 28th feb - 3:05

1) Make games mode dialog mobile/dark mode compatiable (40 mins)
2) Integrate switch component and build out settings modal with dark mode switch (50 mins)
3) Homescreen UI tidy up for mobile sizing (25 mins)
4) Refactored getDailyShuffle cards to a custom hook (15 mins)
5) discovery and code base review (10 mins)
6) Add types to the Card component (10 mins)
7) Update favicon (5 mins)
8) Update Helmet site header (5 mins)
9) Remove use of 'Any' types (10 mins)
10) Re-implement fact of the day scheduler & container refinement (15 mins)

### 27th feb - 2:50

1) integrate loading skeletons on cards (15 mins)
2) board fits on main screen with centered card grid (15 mins)
3) Tidy up styles on DailyShuffle to the Board Component (5 mins)
4) render card skeleton whilst loading daily shufle (10 mins)
5) Fix flip cards bug on 1st render only (60 mins)
6) Refactor asignCardId and Re-order array functions to global utils (5 mins)
7) Refactor the game modes dialog (60 mins)
8) facenook twitter card in meta data

### 26th feb - 1:50

1) fix build issue on redux store initialization (40 mins)
2) translate routing to Gatsby browser vs pages API & validate (10 mins)
3) Add icons and configure homescreen buttons (20 mins)
4) Implement game modes dialog popup on main menu (30 mins)
5) Simplify the stats modal (5 mins)
6) integrate login/register pages to the main app routes (10 mins)
7) fix the basic UI to prevent header loading pop (10 mins)
8) Address correct turns 1 turn over bug (10 mins)
9) game state isRunning boolean tracked in store instead of local state (10 mins)
10) Refactor time played in modals to account for seconds instead of miliseconds (10 mins)

### 25th feb 4:00

1) Refactor copyToClipboard to a custom hook
2) fix header logo to correct image 
3) fix local storage but lets tidy up a new line per game mode
4) update modals to pull from redux instead of localStorage
5) need to get stats modal to access the difficulty selected in the mode i.e. gameStats['gameDifficulty'].bestTurns (currently hardcoded to daily shuffle)
6) Can we set our initial bestScores data from redux as well? 
7) need to update the historic stats on game completion as well, not just on first render
8) Analyse current codebase backlog
9) Refactored reusable code to global utils

 ### 24th feb 6:00

1) lets create .styles.ts files and move our styled components to seperate files. - DONE 
2) Tidy up the board and header components - DONE
3) Upgrade the share functionality to use the naviagtor API - DONE neeeds testing
4) can we track current game time using redux? - DONE
5) Fully integrate a modal register - WIP - Need to swap all current now undefined set calls to instead call for the dispatch-DONE
6) Prevent info modal being accidentally closed - DONE
7) can we remove 'time' as useState completely from Board?  -DONE 
8) set up routing - Actually have pages in the right place! 
9) Create a routes folder/hooks folder of navigate to - needs implementing 
10) Add game modes dialog  - DONE
11) add github link - DONE
12) can I trigger the modals using redux?? - DONE
13) todo use folder structure from VP - DONE 
14) fix remaining modals - done
15) Clean up accessing store selectors pattern - solved using two hooks - DONE


https://dev.to/arisa_dev/gatsby-tailwindcss-integrate-dark-mode-in-10-minutes-1p2c?fbclid=IwAR3IjD5K6GgEYgtSV00xAa-NPmtBagADldUVAq9wpcIGxEPLWxyr4H0-180


- Analytics dashboard? https://www.youtube.com/watch?v=MGjCIQh5Pkw&t=160s&ab_channel=Joshtriedcoding


# to do 
 
1) refactor all slices with the the typedSelector 
2) close modals on route change
3) probably need to refactor the historic facts section to make sure it caters for all game modes

# future work

1. Optimise designs for tablet
2. Need to test on slow connection and potenially block modal/show a loading spinner?
2. integrate full sign in flow and make app cohesive
3. Save scores to online database - if signed in.
4. Use python API and write Facts endpoint with chat gtp-3 
5. investigate how we could share a shuffle code
6. Leaderboards & Auth
8. Analytics tracking
9. https://ui.aceternity.com/components
10. build a landing page - Matt to take the lead on this
11. In settings difficulty switch? To reduce the flip time (regardless classic should have a longer flip time)
12. check old build useDisabled?
13. branch protections/staging branch? 
14. calendar UI for old daily shuffles?
15. Suspense component?
16. Basic testing and mocking with Jest?
17. Testing branches should be available when  I push code on github