import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";

const AddEdit = ({ mode }: { mode: string }) => {
  return (
    <Card>
      <CardHeader>
        {mode === "0" ? (
          <h6>Add New Restaurant</h6>
        ) : (
          <h6>Edit the Restaurant</h6>
        )}
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default AddEdit;
