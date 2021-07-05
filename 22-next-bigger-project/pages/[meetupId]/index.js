import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://blog.lucasgilbert.com.br/wp-content/uploads/2018/03/city-e-town-lucas-gilbert.jpg"
      title="A First Meetup"
      address="Some Street r5, New York"
      description="The meetup description"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://blog.lucasgilbert.com.br/wp-content/uploads/2018/03/city-e-town-lucas-gilbert.jpg',
        title: 'A First Meetup',
        address: 'Some Street r5, New York',
        description: 'The meetup description',
      },
    },
  };
}

export default MeetupDetails;
