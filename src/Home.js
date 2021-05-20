import React from "react";
import { Card, CardBody } from "reactstrap";

//home component
function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <h3 className="font-weight-bold">
            Welcome to Silicon Valley's premier social dining experience!
          </h3>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
