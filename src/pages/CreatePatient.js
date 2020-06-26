import React, { useState } from "react";
import { TextInput, Container, Button, Badge } from "react-materialize";
import axios from "axios";

const CreatePatient = () => {
  const [newUserobject, setNewUserobject] = useState({
    userName: null,
    password: null,
    firstName: null,
    lastName: null,
    gender: null,
    dateOfBirth: null,
    phone: null,
    email: null,
    nationality: null,
    address: null,
    weight: null,
    height: null,
    bmi: null,
  });

  const [disable, setDisable] = useState(false);

  const formHandler = () => {
    axios
      .post("http://localhost:1000/api/patient/", newUserobject)
      .then((e) => console.log(e))
      .catch((e) => console.log("from catch", e));
    setDisable(true);

    console.log(newUserobject);
  };

  return (
    <Container>
      <TextInput
        disabled={disable}
        id="userName"
        label="Username"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, userName: e.target.value })
        }
      />
      <TextInput
        disabled={disable}
        password
        id="password"
        label="Password"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, password: e.target.value })
        }
      />
      <TextInput
        disabled={disable}
        id="firstName"
        label="First Name"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, firstName: e.target.value })
        }
      />
      <TextInput
        disabled={disable}
        id="lastName"
        label="last Name"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, lastName: e.target.value })
        }
      />

      <TextInput
        disabled={disable}
        id="gender"
        label="Gender M/F"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, gender: e.target.value })
        }
      />

      <TextInput
        disabled={disable}
        id="dateOfBirth"
        label="Date Of Birth (yyyy-mm-dd)"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, dateOfBirth: e.target.value })
        }
      />
      <TextInput
        disabled={disable}
        id="phone"
        label="Phone Number"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, phone: e.target.value })
        }
      />
      <TextInput
        disabled={disable}
        email
        id="email"
        label="Email"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, email: e.target.value })
        }
      />
      <TextInput
        disabled={disable}
        id="nationality"
        label="Nationality"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, nationality: e.target.value })
        }
      />
      <TextInput
        disabled={disable}
        id="address"
        label="Address"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, address: e.target.value })
        }
      />
      <TextInput
        disabled={disable}
        id="weight"
        label="Weight (Number)"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, weight: e.target.value })
        }
      />
      <TextInput
        disabled={disable}
        id="height"
        label="Height (Number)"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, height: e.target.value })
        }
      />
      <TextInput
        disabled={disable}
        id="bmi"
        label="BMI (Number)"
        onChange={(e) =>
          setNewUserobject({ ...newUserobject, bmi: e.target.value })
        }
      />
      {disable ? <Badge>patient has been created</Badge> : null}
      <Button onClick={formHandler}>go</Button>
    </Container>
  );
};

export default CreatePatient;
