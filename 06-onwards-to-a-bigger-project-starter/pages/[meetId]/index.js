import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { DUMMY_MEETUPS } from "../../lib/DUMMY_VALUES";

export default function DetailMeet(props) {
  if (!props.meetup) {
    return "ERROR, NOT FOUND";
  }

  console.log(props.meetup);
  return (
    <>
      <MeetupDetail props={props.meetup} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = DUMMY_MEETUPS.map((value) => ({
    params: { meetId: value.id.toString() },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const meetId = context.params.meetId;
  const dummyValue = DUMMY_MEETUPS.find((item) => item.id === meetId);

  return {
    props: {
      meetup: dummyValue,
    },
  };
}
