import React from "react";
import { Row, Col, TextInput, DatePicker } from "react-materialize";

const PatientWightEnter = () => {
  const handler = (e) => {
    console.log(e);
  };
  return (
    <Row>
      <Col s={12} l={12} m={12}>
        <TextInput label="wight " />
        <TextInput label="patient ID " />
        <DatePicker
          id="DatePicker-5"
          onChange={handler}
          options={{
            autoClose: false,
            container: null,
            defaultDate: null,
            disableDayFn: null,
            disableWeekends: false,
            events: [],
            firstDay: 0,
            format: "mmm dd, yyyy",
            i18n: {
              cancel: "Cancel",
              clear: "Clear",
              done: "Ok",
              months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              monthsShort: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              nextMonth: "›",
              previousMonth: "‹",
              weekdays: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"],
              weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            },
            isRTL: false,
            maxDate: null,
            minDate: null,
            onClose: null,
            onDraw: null,
            onOpen: null,
            onSelect: null,
            parse: null,
            setDefaultDate: false,
            showClearBtn: false,
            showDaysInNextAndPreviousMonths: false,
            showMonthAfterYear: false,
            yearRange: 10,
          }}
        />
      </Col>
    </Row>
  );
};

export default PatientWightEnter;
