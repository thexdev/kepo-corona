import React, { useEffect, useState, memo } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";

import happy from "assets/img/happy.svg";
import sad from "assets/img/sad.svg";
import sick from "assets/img/sick.svg";

const DataIndonesia = () => {
  const [korban, setKorban] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.kawalcorona.com/indonesia/")
      .then(res => setKorban(res.data[0]))
      .catch(console.error);
  }, []);

  return (
    <Row>
      <Col md={12}>
        <h3 className="text-center text-uppercase text-color-orange mb-4">
          indonesia
        </h3>
      </Col>
      <Col xs={12} md={4}>
        <Card className="border-0 shadow-sm mb-5 mb-md-0">
          <Card.Body>
            <img
              src={sick}
              alt="pasien positif"
              className="d-block mx-auto"
              width="70"
              height="70"
            />
            <Card.Title className="text-center mt-2">Korban Positif</Card.Title>
            <h3 className="text-center text-danger">{korban.positif}</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className="border-0 shadow-sm mb-5 mb-md-0">
          <Card.Body>
            <img
              src={happy}
              alt="pasien sembuh"
              className="d-block mx-auto"
              width="70"
              height="70"
            />
            <Card.Title className="text-center mt-2">Korban Sembuh</Card.Title>
            <h3 className="text-center text-success">{korban.sembuh}</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className="border-0 shadow-sm mb-5 mb-md-0">
          <Card.Body>
            <img
              src={sad}
              alt="pasien meninggal"
              className="d-block mx-auto"
              width="70"
              height="70"
            />
            <Card.Title className="text-center mt-2">
              Korban Meninggal
            </Card.Title>
            <h3 className="text-center text-secondary">{korban.meninggal}</h3>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default memo(DataIndonesia);
