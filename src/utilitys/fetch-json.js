import axios from 'axios';
const tool = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

export default async function(url) {
  const res = await tool.get(url);
  return res;
}
