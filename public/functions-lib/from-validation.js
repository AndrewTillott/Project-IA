
const emailVal = email => {
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
};

const phoneVal = number => {
  const re = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/
  return re.test(number);
}

const nameVal = name => {
  return Boolean(name);
};

const postcodeVal = postcode => {
  const re = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/
  return re.test(postcode);
};

const validateForm = query => {

  console.log('function running')
  const error = [];

  const name = query.Name;
  const email = query['Email Address'];
  const number = query['Phone Number'];
  const postcode = query['Post Code'];
  const typeOfEnterprise = query['type-of-enterprise'];

  if (!emailVal(email)) {
    console.log('invalid-email');
    error.push('invalid-email');
  };
  if (!phoneVal(number)) {
    console.log('invalid-number');
    error.push('invalid-number');
  };
  if (!nameVal(name)) {
    console.log('invalid-name');
    error.push('invalid-name');
  };
  if (!postcodeVal(postcode)) {
    console.log('invalid-postcode');
    error.push('invalid-postcode');
  };
  if (!Object.keys(query).includes('type-of-enterprise')) {
    console.log('no-enterprise-selected');
    error.push('no-enterprise-selected');
  };

  return error;

};

module.exports = validateForm;