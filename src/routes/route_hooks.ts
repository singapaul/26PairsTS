import { navigate } from "gatsby";
import {home} from './route_strings'

export const useNavigateToHomescreen = () => {
const NavigateToHomescreen = () => navigate(home)
    return [NavigateToHomescreen]
}