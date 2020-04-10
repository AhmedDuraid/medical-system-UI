import React from "react";

import Users from "../components/UsersState";
import Patients from "../components/PatientsState";
import Articles from "../components/ArticlesState";
import Feedback from "../components/FeedbackState";
import Foods from "../components/FoodsState";
import Medicine from "../components/Medicine";
import Plans from "../components/PlansState";

import { UsersProvider } from "../context/UsersContext";
import { PatientProvider } from "../context/PatientContext";
import { ArticlesProvider } from "../context/ArticlesContext";
import { FeedbackProvider } from "../context/FeedbackContext";
import { FoodsProvider } from "../context/FoodsContext";
import { MedicineProvider } from "../context/MedicineContext";
import { PlansProvider } from "../context/PlansContext";

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
          <PatientProvider>
            <Patients />
          </PatientProvider>
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="Users"
          icon={<Icon>account_circle</Icon>}
          node="div"
        >
          <UsersProvider>
            <Users />
          </UsersProvider>
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="Articles"
          icon={<Icon>assignment</Icon>}
          node="div"
        >
          <ArticlesProvider>
            <Articles />
          </ArticlesProvider>
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="Feedback"
          icon={<Icon>feedback</Icon>}
          node="div"
        >
          <FeedbackProvider>
            <Feedback />
          </FeedbackProvider>
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="Foods"
          icon={<Icon>local_dining</Icon>}
          node="div"
        >
          <FoodsProvider>
            <Foods />
          </FoodsProvider>
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="Medicine"
          icon={<Icon>local_pharmacy</Icon>}
          node="div"
        >
          <MedicineProvider>
            <Medicine />
          </MedicineProvider>
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header="Plans"
          icon={<Icon>fitness_center</Icon>}
          node="div"
        >
          <PlansProvider>
            <Plans />
          </PlansProvider>
        </CollapsibleItem>
      </Collapsible>
    </React.Fragment>
  );
};

export default Home;
