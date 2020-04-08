import React from "react";

import Users from "../components/mainAdmin/UsersState";
import Patients from "../components/mainAdmin/PatientsState";
import Articles from "../components/mainAdmin/ArticlesState";
import Feedback from "../components/mainAdmin/FeedbackState";
import Foods from "../components/mainAdmin/FoodsState";
import Medicine from "../components/mainAdmin/Medicine";
import Plans from "../components/mainAdmin/PlansState";

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

        <CollapsibleItem
          expanded={false}
          header="Articles"
          icon={<Icon>assignment</Icon>}
          node="div"
        >
          <Articles />
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="Feedback"
          icon={<Icon>feedback</Icon>}
          node="div"
        >
          <Feedback />
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="Foods"
          icon={<Icon>local_dining</Icon>}
          node="div"
        >
          <Foods />
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="Medicine"
          icon={<Icon>local_pharmacy</Icon>}
          node="div"
        >
          <Medicine />
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="Plans"
          icon={<Icon>fitness_center</Icon>}
          node="div"
        >
          <Plans />
        </CollapsibleItem>
      </Collapsible>
    </React.Fragment>
  );
};

export default Home;
