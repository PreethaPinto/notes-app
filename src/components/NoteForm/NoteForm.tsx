import React, { FormEvent, useRef, useState } from 'react';
import CreatableReactSelect from 'react-select/creatable';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { NoteData, Tag } from '../../NoteData';
import styles from './NoteForm.module.css';

interface NoteFormProps {
  onSubmit: (data: NoteData) => void;
}

const NoteForm = ({ onSubmit }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted');  // Check if this logs

    if (!titleRef.current || !detailsRef.current) {
      console.error('Refs are not set correctly');
      return;
    }

    const title = titleRef.current.value;
    const details = detailsRef.current.value;

    console.log('Title:', title);
    console.log('Details:', details);
    console.log('Selected Tags:', selectedTags);

    onSubmit({
      title,
      details,
      tags: selectedTags,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box className={styles.wrapper}>
          <TextField
            className={styles['text-field']}
            label='New Note'
            inputRef={titleRef}
          />
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
        <Box>
          <TextField
            className={styles.details}
            sx={{ marginTop: '20px' }}
            label='Description'
            multiline
            rows={15}
            inputRef={detailsRef}
          />
        </Box>
        <Box className={styles.buttons}>
          <Button type="submit">Save</Button>

          <Link to='/'>
            <Button>Cancel</Button>
          </Link>
        </Box>
      </form>
    </>
  );
};

export default NoteForm;
