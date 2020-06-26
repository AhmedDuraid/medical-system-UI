import React from "react";

import Users from "../components/UsersState";
import Patients from "../components/PatientsState";
import Articles from "../components/ArticlesState";
import Feedback from "../components/FeedbackState";
import Foods from "../components/FoodsState";
import Medicine from "../components/Medicine";
import Plans from "../components/PlansState";

import {
  Collapsible,
  CollapsibleItem,
  Icon,
  Container,
} from "react-materialize";

const Home = () => {
  return (
    <Container>
      <Collapsible accordion popout>
        <CollapsibleItem
          expanded={true}
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
    </Container>
  );
};

export default Home;
