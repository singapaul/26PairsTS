import { navigate } from "gatsby";


export const useNavigateToHomescreen = () => {
const NavigateToHomescreen = () => navigate('/')
    return [NavigateToHomescreen]
}