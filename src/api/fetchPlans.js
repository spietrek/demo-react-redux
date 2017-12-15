import axios from 'axios';
import format from 'date-fns/format';

const getWebAbsoluteUrl = () => window._spPageContextInfo.webAbsoluteUrl; // eslint-disable-line no-underscore-dangle

const getFormattedDate = date => format(new Date(date), 'M/D/YYYY h:mm A');
const getEditUrl = id =>
  `${getWebAbsoluteUrl()}/Lists/Dashboard/EditForm.aspx?ID=${id}`;
const getPrintUrl = id => `/#/document?planId=${id}`;
const getValidationUrl = id => `/#/document?planId=${id}`;

const formatPlansData = data => {
  const items = data.map(item => {
    const modifiedDate = getFormattedDate(item.modifiedDate);
    const editUrl = getEditUrl(item.id);
    const printUrl = getPrintUrl(item.id);
    const validationUrl = getValidationUrl(item.id);
    return { ...item, modifiedDate, editUrl, printUrl, validationUrl };
  });
  return items;
};

const fetchPlans = () => {
  const request = 'http://localhost:3004/plans';
  return axios(request)
    .then(response => {
      const { data } = response;
      return formatPlansData(data);
    })
    .catch(error => {
      console.log(error);
      return [];
    });
};

export default fetchPlans;
