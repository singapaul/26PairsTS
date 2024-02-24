https://dev.to/arisa_dev/gatsby-tailwindcss-integrate-dark-mode-in-10-minutes-1p2c?fbclid=IwAR3IjD5K6GgEYgtSV00xAa-NPmtBagADldUVAq9wpcIGxEPLWxyr4H0-180


# todo 

1) Let's move as many functions as possible to global utils
2) fix local storage but lets tidy up a new line per game mode
3) Can we set our initial bestScores data from redux as well? 
4) fix header logo 
5) Swap in my login/register pages to the main app routes
6)  make layout for profile page 
7) tidy up game modes
8) fix the basic UI so it fits immediately onto the screen


 
# future work
1. fix darkmode styles completely and add toggle switch (shadCN) to the settings screen
2. integrate full sign in flow and make app cohesive
3. Save scores to online database 
4. Use python API and write Facts endpoint with chta gtp-3 
5. investigate how we could share a shuffle code

## ARCHIVE: 


### 25h feb

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