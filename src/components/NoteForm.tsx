import React, { FormEvent, useRef, useState } from 'react'
import { Form, Stack, Col, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CreatebleReactSelect from "react-select";
import { NoteFormProp, Tag } from "../types";


const NoteForm = ({ onSubmit }: NoteFormProp) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      //@ts-ignore
      title: titleRef.current?.value,
      //@ts-ignore
      markdown: markdownRef.current?.value,
      tags: []
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId='title'>
                <Form.Label >Title</Form.Label>
                <Form.Control ref={titleRef} required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='Tags'>
                <Form.Label >Tags</Form.Label>
                <CreatebleReactSelect value={selectedTags.map(tag => {
                  return { lable: tag.lable, value: tag.id }
                })}
                onChange={tags => {
                  setSelectedTags(tags.map(tag => {
                    return { lable: tag.lable, id: tag.value }
                  }))
                }}
                isMulti />
              </Form.Group>
            </Col>
          </Row>
          <Col>
            <Form.Group controlId='markdown'>
              <Form.Label >Body</Form.Label>
              <Form.Control required as='textarea' rows={10} ref={markdownRef} />
            </Form.Group>
          </Col>
          <Stack direction='vertical' gap={2} className='justify-content-end'>
            <Button type='button' variant="primary">Save</Button>
            <Link to='..'>
              <Button type='button' variant='outline-secondary'>Cancel</Button>
            </Link>
          </Stack>
        </Stack>
      </Form>
    </>
  )
}

export default NoteForm;