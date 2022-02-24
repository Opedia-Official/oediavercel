import { Modal  } from "react-bootstrap";
import ReactPlayer from 'react-player'
export default function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>

        <ReactPlayer  url={props.url} width="100%" height="400px"  playing={true}/>

        </Modal.Body>
      </Modal>
    );
  }
