import Tts from 'react-native-tts';

const initTTS = () => {
  Tts.setDefaultRate(0.5);
  Tts.setDefaultPitch(1.5);
  Tts.setDefaultLanguage('en-US');
  //Tts.setDefaultLanguage('vi-VN');
};

export default {
  initTTS,
  Tts,
};