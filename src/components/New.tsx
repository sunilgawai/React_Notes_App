import NoteForm from './NoteForm';

const New = () => {
  return (
    <>
      <h1 className='mb-4'>New Note</h1>
      {/* props to be add */}
      {/* @ts-ignore */}
      <NoteForm/>
    </>
  )
}

export default New;