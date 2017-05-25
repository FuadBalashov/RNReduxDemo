import React from 'react';
import FilterLink from '../containers/FilterLink';
import { View, Text } from 'react-native';

const Footer = () => {
  return (
    <View>
      <Text>
        Show:
      </Text>
      <FilterLink filter="SHOW_ALL">
        <Text>
          All
        </Text>
      </FilterLink>
      <FilterLink filter="SHOW_ACTIVE">
        <Text>
          Active
        </Text>
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
        <Text>
          Completed
        </Text>
      </FilterLink>
    </View>
  );
};

export default Footer;