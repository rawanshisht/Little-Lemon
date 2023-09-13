import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function BookTableForm({ formData, setFormData }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "Must be at least 1")
      .max(10, "Cannot exceed 10")
      .required("Guests is required"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const chosenTime = values.time; // Get the chosen time from the form values

    // Map over the times array and update the 'available' property for the chosen time
    const updatedTimes = values.times.map((time) => {
      if (time.time === chosenTime) {
        // If it's the chosen time, set 'available' to false
        return { ...time, available: false };
      } else {
        // If it's not the chosen time, return the original object
        return time;
      }
    });

    setFormData({
      ...formData,
      times: updatedTimes,
    });

    setSubmitting(false);
  };

  // const updatedTimes = formData.times.map((timeObj) => {
  //   for (let i of values.times) {
  //     if (timeObj === i) {
  //       //   // Update the available property for the selected time
  //       return { ...timeObj, available: false }; // You can set it to false or change it according to your logic
  //     }
  //     return timeObj; // For other times, just return them as they are
  //   }
  //   console.log("hi", updatedTimes);
  // });

  //   const handleInputChange = (e)=>{
  //     const { name, value } = e.target;
  //     if(name === "time"){
  //         // updateTime(e.target.value);
  //         const updatedTimes = formData.times.map((timeObj) => {
  //             if (timeObj.time === e.target.value) {
  //               // Update the available property for the selected time
  //               return { ...timeObj, available: false }; // You can set it to false or change it according to your logic
  //             }
  //             return timeObj; // For other times, just return them as they are
  //           });
  //           setFormData({
  //             ...formData,
  //             times: updatedTimes,
  //           });
  //     }
  //     else{
  //         setFormData({ ...formData, [name]: value });
  //     }
  //}
  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange }) => (
        <Form id="form">
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="date">Choose date</label>
            <Field type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" />
          </div>

          <div>
            <label htmlFor="res-time">Choose time</label>
            <Field as="select" id="res-time" name="time">
              <option value="" default>
                Select an option
              </option>
              {formData.times
                .filter((t) => t.available)
                .map((option, index) => (
                  <option key={index} value={option.time}>
                    {option.time}
                  </option>
                ))}
            </Field>
            <ErrorMessage name="time" component="div" />
          </div>

          <div>
            <label htmlFor="guests">Number of guests</label>
            <Field
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
            />
            <ErrorMessage name="guests" component="div" />
          </div>

          <div>
            <label htmlFor="occasion">Occasion</label>
            <Field as="select" id="occasion" name="occasion">
              <option value="" default>
                Select an option
              </option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Field>
            <ErrorMessage name="occasion" component="div" />
          </div>

          <div>
            <button type="submit" disabled={isSubmitting}>
              Make Your reservation
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default BookTableForm;
