// validation script here

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/i,
  slug: /^[a-z\d-%_]{8,20}$/,
  email: /^([a-z\d-_\.]+)@([a-z\d-_\.]{2,20})(\.[a-z]{2,8})(\.[a-z]{2,8})?$/
};
// all inputs
const inputs = document.querySelectorAll("input");

// validation function
const validate = (field, regex) => {
  const isMatched = regex.test(field.value);
  if (isMatched) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
  console.log(isMatched, field);
};

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
