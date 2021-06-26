import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import TimeLineItem from "./Item";

const TimeLineDetailsModal = ({ title, subtitle, children, show, onClose }) => (
  <Modal show={show} onHide={onClose} size="lg" centered>
    <Modal.Header
      className="d-flex flex-column align-items-center justify-content-center"
      closeButton
    >
      <Modal.Title class="text-center d-block h4 text-uppercase font-weight-bold m-0">
        {title}
      </Modal.Title>
      <span className="modal-subtitle text-center d-block w-100 p text-uppercase font-weight-bold m-0">
        {subtitle}
      </span>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

const TimeLine = ({ items, variant = "2" }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [details, setDetails] = useState(null);

  const handleOpenDetails = (details) => {
    setDetails(details);
    setShowDetailsModal(true);
  };

  const handleCloseDetails = () => {
    setShowDetailsModal(false);
    setDetails(null);
  };

  return (
    <>
      <div className={`timeline timeline-theme-${variant}`}>
        {items &&
          items.map((item, index) => (
            <TimeLineItem
              key={item.slug}
              even={(index + 1) % 2 == 0}
              onOpenDetails={handleOpenDetails}
              {...item}
            />
          ))}
      </div>

      {showDetailsModal && details && (
        <TimeLineDetailsModal
          show={showDetailsModal}
          onClose={handleCloseDetails}
          {...details}
        />
      )}
    </>
  );
};

export default TimeLine;
