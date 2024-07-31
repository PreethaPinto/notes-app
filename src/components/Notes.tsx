import { RawNote } from "../NoteData"
import { Tag } from "../NoteData"
import { useLocalStorage } from "../useLocalStorage"

const Notes = () => {
    const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', [])
    const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', [])
}

const notesWithTage = useMemo(() => {
    return notesWithTage.map(note => {
        return {...}
    })
})

export default Notes