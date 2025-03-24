// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
    login: string;
    name: string;
    email: string | null;
    location: string | null;
    avatar_url: string;
    company: string | null;
    html_url: string;
    bio: string | null;
  }
  