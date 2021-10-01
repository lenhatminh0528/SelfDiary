import {database} from './database';

// export type Note = {
//   createdAt?: Date,
//   title: string,
//   message: string,
//   selectedDate: String,
//   id: number,
// };

const notes = database.collections.get('notes');

export const observeNotes = () => notes.query().observe();

export const saveNewNote = async ({
  createdAt,
  title,
  message,
  selectedDate,
}) => {
  await database.action(async () => {
    await notes.create(entry => {
      entry.title = title;
      entry.message = message;
      entry.createdAt = createdAt;
      entry.selectedDate = selectedDate;
    });
  });
};

export const updateNote = async ({id, title, message, selectedDate}) => {
  await database.action(async () => {
    const note = await notes.find(id);
    note.update(() => {
      note.title = title;
      note.message = message;
      note.selectedDate = selectedDate;
    });
  });
};

export const deleteNote = async ({id}) => {
  await database.action(async () => {
    const note = await notes.find(id);
    note.destroyPermanently();
  });
};
