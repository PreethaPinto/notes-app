import { Box, Paper } from "@mui/material"
import NoteForm from "../../components/NoteForm/NoteForm"
import styles from './NewNote.module.css'

const NewNote = () => {
  return (
<>
<Box className={styles.wrapper}>
<Paper className={styles.note}>
<NoteForm />
</Paper>
</Box>

</>  )
}

export default NewNote