import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/exerciseActions";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/Errormessage";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate } from "react-router-dom";

function CreateNote() {
    const navigate=useNavigate()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");

  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.createexercise);
  const { loading, error, note } = noteCreate;

  console.log(note);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setDuration("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(title, content, category,duration));
    if (!title || !content || !category || !duration) return;

    resetHandler();
    navigate("/myexercise");
  };

  useEffect(() => {}, []);

  return (
    <div  style={{position:"absolute",left:"400px",top:"80px"}}>
      <Card className=" " style={{width:"600px"}}>
        <Card.Header className=" text-center ">Create a new Exercise</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Exercise Preview</Card.Header>
                <Card.Body>
                   <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="content"
                value={duration}
                placeholder="Enter the Category"
                onChange={(e) => setDuration(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Exercise
            </Button>
            <Button className="mx-2 my-2" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
            <Link to='/myexercise'>
            <Button className="mx-0 my-2 px-5 text-white"  variant="info" >
              Back
            </Button>
            </Link>
          </Form>
        </Card.Body>

        <Card.Footer className="text-white text-center">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
      </div>
    
  );
}

export default CreateNote;