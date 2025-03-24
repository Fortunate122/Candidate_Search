import { Candidate } from '@/types';

type Props = {
  candidates: Candidate[];
  onRemove: (login: string) => void;
};

const CandidateTable = ({ candidates, onRemove }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Username</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate) => (
          <tr key={candidate.login}>
            <td>
              <img
                src={candidate.avatar_url}
                alt={candidate.name}
                width={50}
                height={50}
                style={{ borderRadius: '50%' }}
              />
            </td>
            <td>{candidate.name}</td>
            <td>{candidate.login}</td>
            <td>{candidate.location}</td>
            <td>{candidate.email}</td>
            <td>{candidate.company}</td>
            <td>{candidate.bio}</td>
            <td>
              <button
                onClick={() => onRemove(candidate.login)}
                style={{ backgroundColor: 'red', color: 'white' }}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CandidateTable;