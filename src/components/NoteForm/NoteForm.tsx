import CreatableReactSelect from 'react-select/creatable';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { NoteData, Tag } from '../../NoteData';
import { useState } from 'react';
import styles from './NoteForm.module.css'

interface FormFields {
  newNote: string;
  details: string;
}

interface NoteFormProps {
  onSubmitNoteData: (data: NoteData) => void;
}

const NoteForm = ({ onSubmitNoteData }: NoteFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    onSubmitNoteData({
      title: data.newNote,
      details: data.details,
      tags: [],
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={styles.wrapper}>
        <TextField
        className={styles["text-field"]}
          {...register('newNote', { required: 'Please enter a note' })}
          label='New Note'
          variant='outlined'
        />
        {errors.newNote && <div>{errors.newNote.message}</div>}
          <CreatableReactSelect 
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: '300px', // Adjust width as needed
              minHeight: '56px', // Adjust height as needed
            }),
          }}
            value={selectedTags.map((tag) => ({
              label: tag.label,
              value: tag.id,
            }))}
            onChange={(tags) =>
              setSelectedTags(
                tags.map((tag) => ({
                  label: tag.label,
                  id: tag.value,
                }))
              )
            }
            isMulti
          />
        </Box>
        <TextField
          className={styles.details} sx={{marginTop: '20px'}}
          {...register('details', { required: 'Please enter details' })}
          id='outlined-multiline-flexible'
          label='Details'
          multiline
        />
        {errors.details && <div>{errors.details.message}</div>}
        <Box className={styles.buttons}>
          <Button variant='contained' type='submit'>
            Save
          </Button>
          <Link to='..'>
            <Button variant='outlined'>Cancel</Button>
          </Link>
        </Box>
      </form>
      </>
  );
};

export default NoteForm;
