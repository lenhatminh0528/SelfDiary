import {Platform} from 'react-native';
import isAndroid from '../../utils/index';
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
// import migrations from './migrations';
import {Note} from './noteModel';
import {SelectedDate} from './selectedDateModel';

const adapter = new SQLiteAdapter({
  schema,
  // migrations,
  jsi: !isAndroid,
  dbName: 'SelfDiaryApp',
  onSetUpError: error => {
    console.log(
      'Database failded to load -- offer the user to reload the app or log out',
    );
  },
});

export const database = new Database({
  adapter,
  modelClasses: [Note, SelectedDate],
  // actionsEnabled: true,  //update: action always enable
});
