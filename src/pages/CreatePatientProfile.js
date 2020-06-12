import React, { useState } from "react";
import { TextInput, Container, Button } from "react-materialize";
import axios from "axios";

const CreatePatientProfile = () => {
  const [paitentProfileInfo, setPaitentProfileInfo] = useState({});
  const [patientPlan, setPatientPlan] = useState({});

  const createProfileHandler = () => {
    let planObject = { ...patientPlan };

    let dataObject = {
      ...paitentProfileInfo,
      plan: planObject,
    };

    axios
      .post(`http://localhost:1000/api/patient_profile`, dataObject)
      .then((e) => {
        console.log(e);
      });
    console.log(dataObject);
  };

  console.log(paitentProfileInfo);
  console.log(patientPlan);

  return (
    <Container>
      <TextInput
        label="patient ID"
        id="patientID"
        onChange={(e) =>
          setPaitentProfileInfo({
            ...paitentProfileInfo,
            patientID: e.target.value,
          })
        }
      />
      <TextInput
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
        label="plan D1"
        id="planD1"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD1: e.target.value,
          })
        }
      />
      <TextInput
        label="plan D2"
        id="planD2"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD2: e.target.value,
          })
        }
      />
      <TextInput
        label="plan D3"
        id="planD3"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD3: e.target.value,
          })
        }
      />
      <TextInput
        label="plan D4"
        id="planD4"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD4: e.target.value,
          })
        }
      />
      <TextInput
        label="plan D5"
        id="planD5"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD5: e.target.value,
          })
        }
      />
      <TextInput
        label="plan D6"
        id="planD6"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD6: e.target.value,
          })
        }
      />
      <TextInput
        label="plan D7"
        id="planD7"
        onChange={(e) =>
          setPatientPlan({
            ...patientPlan,
            planD7: e.target.value,
          })
        }
      />
      <TextInput
        label="progress"
        id="progress"
        onChange={(e) =>
          setPaitentProfileInfo({
            ...paitentProfileInfo,
            progress: [{ weight: e.target.value }],
          })
        }
      />
      <TextInput
        label="Doctor Note"
        id="doctorNote"
        onChange={(e) =>
          setPaitentProfileInfo({
            ...paitentProfileInfo,
            doctorNote: [{ note: e.target.value }],
          })
        }
      />
      <TextInput
        label="labReq "
        id="labReq"
        onChange={(e) =>
          setPaitentProfileInfo({
            ...paitentProfileInfo,
            labReq: [{ labTest: e.target.value }],
          })
        }
      />
      {/* <TextInput
        label="labRes"
        id="labRes"
        onChange={(e) =>
          setPaitentProfileInfo({
            ...paitentProfileInfo,
            labRes: [e.target.value],
          })
        }
      /> */}
      <Button onClick={createProfileHandler}>Create profile</Button>
    </Container>
  );
};

export default CreatePatientProfile;
