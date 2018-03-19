import App from './App';
import Signin from './SignIn';
import Register from './Register';
import JournalDisplay from './JournalDisplay';
import Journal from './Journal';
import JournalEdit from './JournalEdit';

const appState = {
    name: 'app',
    redirectTo: 'home',
    component: App
};
  

const homeState = {
    parent: 'app',
    name: 'home',
    url: '/',
    component: App
  };
  
  const signinState = {    
    name: 'signin',
    url: '/signin',
    component: Signin          
};

const registerState = {
    //parent: 'home',
    name: 'register',
    url: '/register',
    component: Register
};

const journalState = {    
    name: 'journal',
    url: '/journal/:username',
    component: Journal,   
};

const JournalDisplayState = {
    //parent: 'home',
    name: 'display',
    url: '/display/:username',
    component: JournalDisplay
};

const EditState = {
    //parent: 'home',
    name: 'edit',
    url: '/edit/',
    params: {entry: null},
    component: JournalEdit       
};
  

  
  
export default [EditState, journalState, JournalDisplayState, registerState, homeState, appState, signinState];
