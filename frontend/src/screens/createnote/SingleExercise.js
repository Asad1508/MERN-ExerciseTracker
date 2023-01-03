import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, updateNoteAction } from "../../actions/exerciseActions";
import ErrorMessage from "../../components/Errormessage";
import Loading from "../../components/loading";
import ReactMarkdown from "react-markdown";
import { useNavigate,useParams } from "react-router-dom";

function SingleNote() {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [duration, setDuration] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const navigate=useNavigate()
  const noteUpdate = useSelector((state) => state.updateexercise);
  const { loading, error } = noteUpdate;

  const noteDelete = useSelector((state) => state.deleteexercise);
  const { loading: loadingDelete, error: errorDelete } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
    
    navigate("/myexercise")
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/getnotes/${id}`);
      

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDuration(data.duration);
      setDate(data.updatedAt);
    };

    fetching();
  }, [id, date]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setDuration("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(id, title, content, category,duration));
    if (!title || !content || !category || !duration) return;

    resetHandler();
    
    navigate("/myexercise")
  };

  return (
    <div  style={{position:"absolute",left:"400px",top:"80px"}}>
      <Card style={{width:"600px"}}>
        <Card.Header className="text-center">Edit your Exercise</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the content"
                rows={4}
                value={content}
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
                placeholder="Enter the Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="content"
                placeholder="Enter Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button variant="primary" type="submit" className="mt-3">
              Update Exercise
            </Button>
            <Button
              className="mt-3 mx-2"
              variant="danger"
              onClick={() => deleteHandler(id)}
            >
              Delete Note
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-white  text-center">
          Updated on - {date.substring(0, 10)}
        </Card.Footer>
      </Card>
  </div>
  );
}

export default SingleNote;