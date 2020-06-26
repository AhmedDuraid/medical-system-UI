import React, { useState } from "react";
import { TextInput, Container, Button, Badge } from "react-materialize";
import axios from "axios";

const CreatePatientProfile = () => {
  const [paitentProfileInfo, setPaitentProfileInfo] = useState({});
  const [patientPlan, setPatientPlan] = useState({});

  const [disable, setDisable] = useState(false);

  const createProfileHandler = () => {
    let planObject = { ...patientPlan };

    let dataObject = {
      ...paitentProfileInfo,
      plan: planObject,
    };

    axios
      .post(`http://localhost:1000/api/patient_profile`, dataObject)
      .then((e) => {
        setDisable(true);
        console.log(e);
      });

    console.log(dataObject);
  };

  console.log(paitentProfileInfo);

  return (
    <Container>
      <TextInput
        disabled={disable}
        label="patient ID (add the patient before create profile"
        id="patientID"
        onChange={(e) =>
          setPaitentProfileInfo({
            ...paitentProfileInfo,
            patientID: e.target.value,
          })
        }
      />
      <TextInput
        disabled={disable}
        label="Medical History"
        id="medicalHistory"
        onChange={(e) =>
          setPaitentProfileInfo({
            ...paitentProfileInfo,
            medicalHistory: e.target.value,
          })
        }
      />
      <TextInput
        disabled={disable}
        label="plan Day 1"
        id="planD1"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD1: e.target.value,
          })
        }
      />
      <TextInput
        disabled={disable}
        label="plan Day 2"
        id="planD2"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD2: e.target.value,
          })
        }
      />
      <TextInput
        disabled={disable}
        label="plan Day 3"
        id="planD3"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD3: e.target.value,
          })
        }
      />
      <TextInput
        disabled={disable}
        label="plan Day 4"
        id="planD4"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD4: e.target.value,
          })
        }
      />
      <TextInput
        disabled={disable}
        label="plan Day 5"
        id="planD5"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD5: e.target.value,
          })
        }
      />
      <TextInput
        disabled={disable}
        label="plan Day 6"
        id="planD6"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD6: e.target.value,
          })
        }
      />
      <TextInput
        disabled={disable}
        label="plan Day 7"
        id="planD7"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD7: e.target.value,
          })
        }
      />
      <TextInput
        disabled={disable}
        label="progress (Number)"
        id="progress"
        onChange={(e) =>
          setPaitentProfileInfo({
            ...paitentProfileInfo,
            progress: [{ weight: e.target.value }],
          })
        }
      />
      <TextInput
        disabled={disable}
        label="Note"
        id="doctorNote"
        onChange={(e) =>
          setPaitentProfileInfo({
            ...paitentProfileInfo,
            doctorNote: [{ note: e.target.value }],
          })
        }
      />
      <TextInput
        disabled={disable}
        label="lab Request "
        id="labReq"
        onChange={(e) =>
          setPaitentProfileInfo({
            ...paitentProfileInfo,
            labReq: [{ labTest: e.target.value }],
          })
        }
      />

      <Button disabled={disable} onClick={createProfileHandler}>
        Create profile
      </Button>
      {disable ? <Badge> patient has been created</Badge> : null}
    </Container>
  );
};

export default CreatePatientProfile;
