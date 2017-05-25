import React, { PropTypes } from 'react';
import { View, TouchableOpacity } from 'react-native';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return (<View style={{backgroundColor:'yellow'}}>{children}</View>);
  }

  return (
    <TouchableOpacity
        onPress={e => {
          e.preventDefault();
          onClick();
        }}>
        {children}
    </TouchableOpacity>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;