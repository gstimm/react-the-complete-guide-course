import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://blog.lucasgilbert.com.br/wp-content/uploads/2018/03/city-e-town-lucas-gilbert.jpg',
    address: 'Some address r5, 12345, New York',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://blog.lucasgilbert.com.br/wp-content/uploads/2018/03/city-e-town-lucas-gilbert.jpg',
    address: 'Some address r9, 54321, New York',
    description: 'This is a second meetup',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1
  };
};

export default HomePage;
