export type Note = {
    id: string
} & NoteData

export type RawNote = {
    id: string
}

export type RawNoteData = {
    title: string;
    details: string;
    tagIds: string[];
}
export type NoteData = {
    title: string;
    details: string;
    tags: Tag[];
}

export type Tag = {
    id: string;
    label: string;
}