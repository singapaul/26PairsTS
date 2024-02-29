import { navigate } from "gatsby";

import {home} from './route_strings'
import { dailyShuffle } from "./route_strings";



export const useNavigateToHomescreen = () => {
const NavigateToHomescreen = () => navigate(home)
    return [NavigateToHomescreen]
}


export const useNavigateToDailyShuffle = () => {
    const NavigateToDailyShuffle = () => navigate(dailyShuffle)
    return [NavigateToDailyShuffle]
}