import { TOGGLE_TODO } from './actions';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export default createMiddleware = store => next => action => {
  // update the state first
  next(action);
  // if this was a todo toggle and we have only completed tasks, then we play a sound
  if (action.type !== TOGGLE_TODO) {
    return;
  }
  const todos = store.getState().todos;
  if (!todos || todos.filter(t => !t.completed).length > 0) {
    return;
  }

  // Playing the sound
  // bicyclehorn1.wav is from
  // https://opengameart.org/content/bicycle-horn distributed under CC0
  const sound = new Sound('bicyclehorn1.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    sound.play((success) => {
      sound.release();
    });
  });
};