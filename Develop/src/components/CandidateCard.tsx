import { Candidate } from '@/types';

type Props = {
  candidate: Candidate;
  onSave: () => void;
  onSkip: () => void;
};

const CandidateCard = ({ candidate, onSave, onSkip }: Props) => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <img
        src={candidate.avatar_url}
        alt={`${candidate.name}'s avatar`}
        width={150}
        height={150}
        style={{ borderRadius: '50%' }}
      />
      <h2>{candidate.name}</h2>
      <p><strong>Username:</strong> {candidate.login}</p>
      <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
      <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
      <p><strong>Company:</strong> {candidate.company || 'N/A'}</p>
      <p><strong>Bio:</strong> {candidate.bio || 'N/A'}</p>
      <p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={onSave} style={{ backgroundColor: 'green', color: 'white' }}>+</button>
        <button onClick={onSkip} style={{ backgroundColor: 'red', color: 'white' }}>-</button>
      </div>
    </div>
  );
};

export default CandidateCard;