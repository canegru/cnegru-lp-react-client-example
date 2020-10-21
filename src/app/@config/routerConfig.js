import HomePage from '../pages/home/HomePage';
import PageOne from '../pages/newpage/PageOne';
import PageTwo from '../pages/newpage/PageTwo';

const routerConfig = [
  {
    path: '/',
    component: HomePage,
    exact: true,
    private: true,
  },
  {
    path: '/new-page/page-one',
    component: PageOne,
    exact: true,
    private: true,
  },
  {
    path: '/new-page/page-two',
    component: PageTwo,
    exact: true,
    private: true,
  },
]

export default routerConfig