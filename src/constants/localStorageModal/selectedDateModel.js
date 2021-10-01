import {Model} from '@nozbe/watermelondb';
import {
  field,
  relation,
  children,
  date,
  action,
  readonly,
} from '@nozbe/watermelondb/decorators';

export class SelectedDate extends Model {
  static table = 'selectedDates';

  static associations = {
    notes: {type: 'belongs_to', key: 'note_id'},
  };

  @date('date')
  date;

  @relation('notes', 'note_id')
  note;

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
}
