import axios from 'axios';
const getInstaPosts = async (limit) => {
  const url = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_ID}?fields=id,posts.limit(${limit}){full_picture}&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;
  try {
    let data = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getInstaPosts;
