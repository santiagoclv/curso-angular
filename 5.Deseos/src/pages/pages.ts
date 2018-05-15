
import { PendientsPage } from "./pendients/pendients";
import { FinishedPage } from "./finished/finished";


import { TabsPage } from "./tabs/tabs";



// The page the user lands on after opening the app and without a session
export const FirstRunPage = TabsPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = PendientsPage;

export {
    PendientsPage,
    FinishedPage,
    TabsPage
};