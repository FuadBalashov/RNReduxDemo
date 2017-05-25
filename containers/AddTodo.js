import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import { View, Button, TextInput } from 'react-native';

let AddTodo = ({ dispatch }) => {
  return (
    <View>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        ref={node => {
          this.input = node;
        }}
        onChangeText={
          val => {
            this.value = val;
          }
        } />
      <Button 
        title="Submit"
        color="#841584"
        onPress={ () => {
          if (!this.value.trim()) {
            return;
          }
          dispatch(addTodo(this.value));
          {/*this.input.value = '';*/}
        }} 
      />
    </View>

  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;