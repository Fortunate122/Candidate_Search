import { Candidate } from '@/types';

const searchGithub = async (): Promise<{ login: string }[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json() as { login: string }[];

    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }

    return data;
  } catch (err) {
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<Candidate> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json() as Candidate;

    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }

    return data;
  } catch (err) {
    return {} as Candidate;
  }
};

export { searchGithub, searchGithubUser };

