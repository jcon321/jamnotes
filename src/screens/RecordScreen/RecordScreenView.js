import React from 'react';
import T from 'prop-types';
import {View, Text, TouchableOpacity, TextInput, Platform} from 'react-native';
import { Button } from 'react-native-elements';
import TabBarIcon from '../../components/TabBarIcon';
import { durationToStr } from '../../utils/dateHelper';
import s from './styles';
import { colors } from '../../styles';

const RecordScreen = ({
  isRecording,
  durationMillis,
  isDoneRecording,
  onStartRecording,
  onEndRecording,
  onSubmit,
  audioName,
  setAudioName,
  onCancelSave,
}) => {
  if (isDoneRecording) {
    return (
      <View style={s.inputContainer}>
        <TouchableOpacity
          onPress={onCancelSave}
          style={s.cancelCross}
        >
          <TabBarIcon
            size={90}
            name={Platform.OS === 'ios'
                ? `ios-close`
                : `md-close`
            }
          />
        </TouchableOpacity>

        <TextInput
          style={s.inputStyle}
          placeholder="Give a name for your recording"
          value={audioName}
          onChangeText={setAudioName}
          underlineColorAndroid={colors.transparent}
          autoCorrect={false}
          onSubmitEditing={onSubmit}
          returnKeyType="done"
          autoFocus
        />

        <Button
          textStyle={s.submitText}
          buttonStyle={s.submitButton}
          title="Continue"
          onPress={onSubmit}
          disabled={!audioName}
        />
      </View>
    );
  } else if (isRecording) {
    return (
      <View style={s.container}>

        <View style={s.durationContainer}>
          <Text style={s.recordingText}>Recording...</Text>
          <Text style={s.durationText}>
            {durationToStr(durationMillis)}
          </Text>
        </View>

        <TouchableOpacity
          style={s.endRecordButton}
          onPress={onEndRecording}
        >
        </TouchableOpacity>

      </View>
    );
  }

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.recordButton}
        onPress={onStartRecording}
      >
      </TouchableOpacity>
    </View>
  );
};

RecordScreen.navigationOptions = () => ({
  header: null,
});

RecordScreen.propTypes = {
  isRecording: T.bool,
  durationMillis: T.number,
  isDoneRecording: T.bool,
  onStartRecording: T.func,
  onEndRecording: T.func,
  onSubmit: T.func,
  audioName: T.string,
  setAudioName: T.func,
  onCancelSave: T.func,
};

export default RecordScreen;
