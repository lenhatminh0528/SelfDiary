import {appSchema, tableSchema, tableName} from '@nozbe/watermelondb';

// export const Tables = {
//   notes: (tableName('notes'): tableName<Note)
// }
export default appSchema({
  version: 2,
  tables: [
    //add tableSchemas
    tableSchema({
      name: 'notes',
      columns: [
        // {name: 'id', type: 'number', isIndexed: true},   //auto created
        {name: 'title', type: 'string'},
        {name: 'message', type: 'string'},
        {name: 'time_created', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'selectedDates',
      columns: [
        {name: 'date', type: 'number'},
        {name: 'note_id', type: 'string', isIndexed: true},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
  ],
});
