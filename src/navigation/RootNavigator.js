import React from 'react';
import { useAuth } from '../hooks/useAuth';
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';

const RootNavigator = () => {
  const { token } = useAuth();
  return token ? <MainTabs /> : <AuthStack />;
};

export default RootNavigator;