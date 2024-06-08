import CreatableReactSelect from 'react-select/creatable';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { NoteData } from '../NoteData';

interface FormFields {
  newNote: string;
  details: string;
}

interface NoteFormProps {
  onSubmitData: (data: NoteData) => void
}

const NoteForm = ({onSubmitData}: NoteFormProps) => {
  const { register, handleSubmit, formState: {errors} } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = data =>
    onSubmitData({
      title: data.newNote,
      details: data.details,
      tags: []
    });
  

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('newNote', {required:"Please enter a note"})}
          label='New Note'
          variant='outlined'
        />
        {errors.newNote && <div>{errors.newNote.message}</div>}
        <Box sx={{ width: '250px' }}>
          <CreatableReactSelect isMulti  />
        </Box>
        <TextField
          {...register('details', {required:"Please enter details"})}
          id='outlined-multiline-flexible'
          label='Details'
          multiline
        />
        {errors.details && <div>{errors.details.message}</div>}
        <Box>
          <Button variant='contained' type='submit'>Save</Button>
          <Link to='..'>
            <Button variant='outlined' >Cancel</Button>
          </Link>
        </Box>
      </form>
    </>
  );
};

export default NoteForm;
