/* eslint-disable react/prop-types */
// Understanding Props in React

const EligibleForVote = () => {
  return <h2>Eligible For Vote</h2>;
};

export default function Person({ name, age }) {
  return (
    <div className="person">
      <h2>{name}</h2>
      <h2>{age}</h2>
      {age >= 21 ? <EligibleForVote /> : <h2>Not Eligible For Vote</h2>}
    </div>
  );
}
