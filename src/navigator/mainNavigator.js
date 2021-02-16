import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList206333Navigator from '../features/ArticleList206333/navigator';
import ArticleList206332Navigator from '../features/ArticleList206332/navigator';
import ArticleList206331Navigator from '../features/ArticleList206331/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList206333: { screen: ArticleList206333Navigator },
ArticleList206332: { screen: ArticleList206332Navigator },
ArticleList206331: { screen: ArticleList206331Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
