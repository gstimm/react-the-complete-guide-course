import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Gabriel', text: 'Learning React.' },
  { id: 'q2', author: 'Timm', text: 'Anything.' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
