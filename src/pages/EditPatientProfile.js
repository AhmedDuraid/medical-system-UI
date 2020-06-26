import React, { useState } from "react";

import { Container, TextInput, Button } from "react-materialize";
import axios from "axios";

const EditPatientProfile = () => {
  const [patientProfileData, setPatientProfileData] = useState();
  const [patientId, setPatientId] = useState("");
  const [planInput, setplanInput] = useState({});
  const [otherInput, setOtherInput] = useState();
  const [isUpdated, setIsUpdated] = useState(false);

  const getPatientProfile = () => {
    axios
      .get(`http://localhost:1000/api/patient_profile/${patientId}`)
      .then((res) => {
        setPatientProfileData(res.data.data);

        setplanInput(res.data.data.plan);
      });
  };

  const updatePatient = () => {
    // doctor notes Array of object/ each object has note:String
    // progress Array of object/ each object has weight: Number
    // LabReq Array of object/ each object has labTest: String
    // plan object that all will change
    const progress = patientProfileData.progress;
    const doctorNote = patientProfileData.doctorNote;
    const labReq = patientProfileData.labReq;
    let newPlans = { ...planInput };

    progress.push({ weight: otherInput.progress });
    doctorNote.push({ note: otherInput.doctorNote });
    labReq.push({ labTest: otherInput.labReq });

    let dataObject = {
      doctorNote: doctorNote,
      labReq: labReq,
      plan: newPlans,
      progress: progress,
    };

    //sending data
    axios
      .put(
        `http://localhost:1000/api/patient_profile/${patientProfileData._id}`,
        dataObject
      )
      .then((re) => {
        setIsUpdated(true);
      });
    console.log(dataObject);
  };

  return (
    <Container>
      {!patientProfileData ? (
        <React.Fragment>
          <TextInput
            label="patient ID"
            id="patientID"
            onChange={(e) => setPatientId(e.target.value)}
          />
          <Button onClick={getPatientProfile}>Add to profile profile</Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TextInput
            label="plan D1"
            id="planD1"
            onChange={(e) =>
              setplanInput({ ...planInput, planD1: e.target.value })
            }
            disabled={isUpdated}
          />
          <TextInput
            label="plan D2"
            id="planD2"
            onChange={(e) =>
              setplanInput({ ...planInput, planD2: e.target.value })
            }
            disabled={isUpdated}
          />
          <TextInput
            label="plan D3"
            id="planD3"
            onChange={(e) =>
              setplanInput({ ...planInput, planD3: e.target.value })
            }
            disabled={isUpdated}
          />
          <TextInput
            label="plan D4"
            id="planD4"
            onChange={(e) =>
              setplanInput({ ...planInput, planD4: e.target.value })
            }
            disabled={isUpdated}
          />
          <TextInput
            label="plan D5"
            id="planD5"
            onChange={(e) =>
              setplanInput({ ...planInput, planD5: e.target.value })
            }
            disabled={isUpdated}
          />
          <TextInput
            label="plan D6"
            id="planD6"
            onChange={(e) =>
              setplanInput({ ...planInput, planD6: e.target.value })
            }
            disabled={isUpdated}
          />
          <TextInput
            label="plan D7"
            id="planD7"
            onChange={(e) =>
              setplanInput({ ...planInput, planD7: e.target.value })
            }
            disabled={isUpdated}
          />
          <TextInput
            label="add new progress (Number)"
            id="progress"
            onChange={(e) =>
              setOtherInput({ ...otherInput, progress: e.target.value })
            }
            disabled={isUpdated}
          />
          <TextInput
            label=" Add New Note"
            id="doctorNote"
            onChange={(e) =>
              setOtherInput({ ...otherInput, doctorNote: e.target.value })
            }
            disabled={isUpdated}
          />
          <TextInput
            label="Add New labReq "
            id="labReq"
            onChange={(e) =>
              setOtherInput({ ...otherInput, labReq: e.target.value })
            }
            disabled={isUpdated}
          />

          <Button onClick={updatePatient}>Add to profile profile</Button>
        </React.Fragment>
      )}
    </Container>
  );
};

export default EditPatientProfile;
