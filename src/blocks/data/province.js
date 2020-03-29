import React, { useEffect, useState, memo } from "react";
import axios from "axios";
import { Col, Row, Table } from "react-bootstrap";

const DataProvince = () => {
  const [korban, setKorban] = useState([]);

  useEffect(() => {
    axios
      .get("/indonesia/provinsi")
      .then(res => setKorban(res.data))
      .catch(console.error);
  }, []);

  return (
    <Row>
      <Col md={12}>
        <h3 className="text-center text-uppercase text-color-orange mb-4">
          provinsi
        </h3>
      </Col>
      <Col md={12}>
        <Table hover borderless striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th className="text-uppercase">provinsi</th>
              <th className="text-uppercase">positif</th>
              <th className="text-uppercase">sembuh</th>
              <th className="text-uppercase">meninggal</th>
            </tr>
          </thead>
          <tbody>
            {korban.map((item, index) => (
              <tr key={item.attributes.FID}>
                <td>{index + 1}</td>
                <td>{item.attributes.Provinsi}</td>
                <td>{item.attributes.Kasus_Posi}</td>
                <td>{item.attributes.Kasus_Semb}</td>
                <td>{item.attributes.Kasus_Meni}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default memo(DataProvince);
