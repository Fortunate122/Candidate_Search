import { useState } from 'react';
import { Candidate } from '@/types';
import useLocalStorage from '../hooks/useLocalStorage';
import CandidateTable from '../components/CandidateTable';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useLocalStorage<Candidate[]>('savedCandidates', []);
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState<'name' | 'location' | 'company'>('name');

  const handleRemove = (login: string) => {
    setSavedCandidates(savedCandidates.filter(candidate => candidate.login !== login));
  };

  const filtered = savedCandidates.filter(candidate =>
    (candidate.name ?? '').toLowerCase().includes(filter.toLowerCase()) ||
    (candidate.location ?? '').toLowerCase().includes(filter.toLowerCase()) ||
    (candidate.company ?? '').toLowerCase().includes(filter.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    const aVal = (a[sortKey] ?? '').toString().toLowerCase();
    const bVal = (b[sortKey] ?? '').toString().toLowerCase();
    return aVal.localeCompare(bVal);
  });

  return (
    <section>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No candidates have been accepted.</p>
      ) : (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Filter by name, location, company"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <select
              value={sortKey}
              onChange={(e) =>
                setSortKey(e.target.value as 'name' | 'location' | 'company')
              }
            >
              <option value="name">Name</option>
              <option value="location">Location</option>
              <option value="company">Company</option>
            </select>
          </div>
          <CandidateTable candidates={sorted} onRemove={handleRemove} />
        </>
      )}
    </section>
  );
};

export default SavedCandidates;