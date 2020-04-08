import React from "react";

import Users from "../components/Users";
import Patients from "../components/Patients";

import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

const Home = () => {
  return (
    <React.Fragment>
      <Collapsible accordion popout>
        <CollapsibleItem
          expanded={false}
          header="Patient"
          icon={<Icon>face</Icon>}
          node="div"
        >
          <Patients />
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Users"
          icon={<Icon>account_circle</Icon>}
          node="div"
        >
          <Users />
        </CollapsibleItem>
      </Collapsible>
    </React.Fragment>
  );
};

export default Home;
