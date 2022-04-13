export const parseErrorMessage = (err) => {
  let message;

  if (err.response) {
    message = err.response.data.error;
  } else {
    message = err.message;
  }
  return message;
};

export const registration_obj = {
  first_name: "",
  last_name: "",
  email: "",
  mobile_number: "",
  birthdate: "",
  authentication_attributes: {
    email: "",
    password: "",
  },
  store_attributes: {
    name: "",
    lat: "",
    lng: "",
    street: "",
    city: "",
    province: "",
  },
  documents_attributes: [],
};
