import axios from 'axios';
const getInstaPosts = async (limit) => {
  const url = `${process.env.REACT_APP_API_URL}?fields=id,caption,media_url&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;
  try {
    let res = await axios.get(url, {
      params: {
        limit: limit,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default getInstaPosts;
