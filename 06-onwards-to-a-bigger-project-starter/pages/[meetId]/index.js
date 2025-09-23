import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { DUMMY_MEETUPS } from "../../lib/DUMMY_VALUES";
import connectionDatabase from "../../lib/db";
import { ObjectId } from "mongodb";
import Head from "next/head";

export default function DetailMeet(props) {
  if (!props.meetup) {
    return "ERROR, NOT FOUND";
  }

  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetupDetail props={props.meetup} />
    </>
  );
}

export async function getStaticPaths() {
  const { client, meetupsCollection } = await connectionDatabase();
  const result = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();
  client.close();
  const paths = result.map((value) => ({
    params: { meetId: value._id.toString() },
  }));
  return { paths, fallback: 'blocking' };
}
export async function getStaticProps(context) {
  const meetId = context.params.meetId;
  const { client, meetupsCollection } = await connectionDatabase();
  try {
    const doc = await meetupsCollection.findOne({ _id: new ObjectId(meetId) });
    if (!doc) {
      return { notFound: true };
    }
    return {
      props: {
        meetup: {
          id: doc._id.toString(),
          title: doc.title ?? null,
          address: doc.address ?? null,
          image: doc.image ?? null,
          description: doc.description ?? null,
        },
      },
    };
  } finally {
    client.close();
  }
}
