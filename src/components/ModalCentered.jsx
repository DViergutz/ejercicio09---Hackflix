import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCentered(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdropClassName="modal-blur-bg"
      className="shadow"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>{props.movie.original_title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-6 text-center">
            <img
              src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
              id="modalPoster"
              alt="poster"
            />
          </div>
          <div className="col-6 ">
            <p>MovieId: {props.movie.id}</p>
            <p>Popularity: {props.movie.popularity}</p>
            <p>Released : {props.movie.release_date}</p>
            <p className="fs-5 fw-bold">{props.movie.overview}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCentered;
