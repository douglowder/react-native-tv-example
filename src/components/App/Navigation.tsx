import { NavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from 'components/App/Screen';
import React from 'react';
import { Platform } from 'react-native';
import FocusService from 'services/focus';

export enum Route {
  Discover = 'route.discover',
  Movies = 'route.movies',
  Shows = 'route.shows',
  Settings = 'route.settings',
  Movie = 'route.movie',
  Show = 'route.show',
}

export type RouteParams = {
  [Route.Discover]: undefined;
  [Route.Movies]: undefined;
  [Route.Shows]: undefined;
  [Route.Settings]: undefined;
  [Route.Movie]: {
    id: number;
    title: string;
  };
  [Route.Show]: {
    id: number;
    title: string;
  };
};

const RootStack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerTintColor: '#38eabe',
        headerTitleStyle: {
          color: '#FFF',
        },
        headerStyle: {
          backgroundColor: '#0D0F13',
        },
        headerShadowVisible: false,
      }}
      screenListeners={() => ({
        state: (e: any) => {
          const { index, routes } = e.data.state as NavigationState;
          const route = routes[index];

          if (FocusService.instance) {
            FocusService.instance.activeRoute = route.name;
          }
        },
      })}>
      <RootStack.Screen
        name={Route.Discover}
        component={Screen.Discover}
        options={{
          title: 'Discover',
          headerShown: !Platform.isTV,
          animation: 'fade',
        }}
      />
      <RootStack.Screen
        name={Route.Movies}
        component={Screen.Movies}
        options={() => ({
          title: 'Movies',
          headerShown: !Platform.isTV,
          animation: 'fade',
        })}
      />
      <RootStack.Screen
        name={Route.Shows}
        component={Screen.Shows}
        options={() => ({
          title: 'Shows',
          headerShown: !Platform.isTV,
          animation: 'fade',
        })}
      />
      <RootStack.Screen
        name={Route.Settings}
        component={Screen.Settings}
        options={() => ({
          title: 'Settings',
          headerShown: !Platform.isTV,
          animation: 'fade',
        })}
      />
      <RootStack.Screen
        name={Route.Movie}
        component={Screen.Movie}
        options={({ route }) => ({
          title: (route.params as any)?.title || 'Movie',
          headerShown: !Platform.isTV,
        })}
      />
      <RootStack.Screen
        name={Route.Show}
        component={Screen.Show}
        options={({ route }) => ({
          title: (route.params as any)?.title || 'Show',
          headerShown: !Platform.isTV,
        })}
      />
    </RootStack.Navigator>
  );
};

export default Navigation;
