import {Model} from '@nozbe/watermelondb';
import {
  field,
  readonly,
  date,
  text,
  children,
  writer,
} from '@nozbe/watermelondb/decorators';
export class Note extends Model {
  static table = 'notes';

  static associations = {
    selectedDates: {type: 'has_many', foreignKey: 'note_id'},
  };

  @field('id')
  id;

  @text('title')
  title;

  @text('message')
  message;

  @date('time_created')
  timeCreated;

  @children('selectedDates')
  selectedDates;

  @writer async addSelectedDate(date) {
    return this.collections.get('selected_dates').create(selectDate => {
      selectDate.note.set(this);
      selectDate.date = date;
    });
  }
}
