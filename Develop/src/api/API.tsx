import { Candidate } from '@/types';

// 🔍 Temporary Hardcoded Token for Debugging (Remove After Fixing)
const TEMP_HARDCODED_TOKEN = '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';

// 📝 Debug Log to Check if Token is Loaded from .env
console.log('GitHub Token from .env:', import.meta.env.VITE_GITHUB_TOKEN);

const searchGithub = async (): Promise<{ login: string }[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;

    // ✅ Use Hardcoded Token for Debug (Switch to .env Token Later)
    const token = TEMP_HARDCODED_TOKEN || import.meta.env.VITE_GITHUB_TOKEN;

    // 📝 Debug Token Check
    console.log('Using Token:', token);

    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // 📝 Log API Response Status
    console.log('API Response Status:', response.status);

    const data = await response.json() as { login: string }[];

    if (!response.ok) {
      throw new Error(`Invalid API response: ${response.status}`);
    }

    // 📝 Check User Data
    console.log('GitHub User Data:', data);

    return data;
  } catch (err) {
    console.error('Error fetching GitHub data:', err);
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<Candidate> => {
  try {
    // ✅ Use Hardcoded Token Again for User Search
    const token = TEMP_HARDCODED_TOKEN || import.meta.env.VITE_GITHUB_TOKEN;

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // 📝 Debug Response for Single User
    console.log(`Searching for User: ${username}`, response.status);

    const data = await response.json() as Candidate;

    if (!response.ok) {
      throw new Error(`User not found: ${username}`);
    }

    // 📝 Log User Details
    console.log(`User Details:`, data);

    return data;
  } catch (err) {
    console.error('Error fetching GitHub user data:', err);
    return {} as Candidate;
  }
};

export { searchGithub, searchGithubUser };

