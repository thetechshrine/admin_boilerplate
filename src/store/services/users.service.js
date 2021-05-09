import { httpClient } from '../../api';

const baseUrl = '/users';

async function getUsers() {
  return httpClient.get(baseUrl, { params: { key: '4f65b7c0' } });
}

export default { getUsers };
