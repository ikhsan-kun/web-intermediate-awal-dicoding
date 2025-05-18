import HomePage from '../pages/home/home-page';
import StoryPage from '../pages/addStory/addStory-page';
import LoginPage from '../pages/login/login-page';
import RegisterView from '../pages/register/register-page';
import { checkAuthenticatedRoute, checkUnauthenticatedRouteOnly } from '../utils/auth';

const routes = {
  '/':()=> checkAuthenticatedRoute(new HomePage()),
  '/about':()=> checkAuthenticatedRoute(new StoryPage()),
  '/login': ()=> checkUnauthenticatedRouteOnly(new LoginPage()),
  '/register':()=> checkUnauthenticatedRouteOnly(new RegisterView()),
};

export default routes;