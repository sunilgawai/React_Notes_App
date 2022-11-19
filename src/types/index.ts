
export type Note = {
    id: string
} & NoteData

export type Tag = {
    id: string
    lable: string
}

export type NoteData = {
    title: string
    markdown: string
    tags: Tag[]
}

export type NoteFormProp = {
    onSubmit: (data: NoteData) => void
}