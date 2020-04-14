import React from "react";
import PatientModal from "../components/List/PatientModal";

import { PatientProvider } from "../context/PatientContext";

import PatientList from "../components/List/PatientList";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

const List = () => {
  return (
    <PatientProvider>
      <Collapsible accordion popout>
        <CollapsibleItem
          expanded={true}
          header="Patient"
          icon={<Icon>face</Icon>}
          node="div"
        >
          <PatientList />
        </CollapsibleItem>
      </Collapsible>

      <PatientModal />
    </PatientProvider>
  );
};

export default List;
