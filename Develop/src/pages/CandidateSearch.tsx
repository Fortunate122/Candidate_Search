import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '@/types';
import CandidateCard from '../components/CandidateCard';
import useLocalStorage from '../hooks/useLocalStorage';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [savedCandidates, setSavedCandidates] = useLocalStorage<Candidate[]>('savedCandidates', []);

  useEffect(() => {
    const fetchCandidates = async () => {
      const users = await searchGithub();
      const detailedCandidates = await Promise.all(
        users.map((user: { login: string }) => searchGithubUser(user.login))
      );
      setCandidates(detailedCandidates);
    };
    void fetchCandidates();
  }, []);

  const handleSave = () => {
    const current = candidates[currentIndex];
    setSavedCandidates([...savedCandidates, current]);
    setCurrentIndex(currentIndex + 1);
  };

  const handleSkip = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const candidate = candidates[currentIndex];

  if (!candidate) {
    return <h1>No more candidates available</h1>;
  }

  return (
    <section>
      <CandidateCard
        candidate={candidate}
        onSave={handleSave}
        onSkip={handleSkip}
      />
    </section>
  );
};

export default CandidateSearch;
