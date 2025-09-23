import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../lib/DUMMY_VALUES";
import connectionDatabase from "../lib/db";
import Head from "next/head";

export default function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);

  //   useEffect(() => {
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);


  return (
    <>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse a huge list of data" />
    </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// // Server Side Page
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//       // fetch data API
//  return {
//     props: {
//         meetups: DUMMY_MEETUPS
//     }
//  }
// }

// Static Page Generator
export async function getStaticProps() {

  const { client, meetupsCollection } = await connectionDatabase();
  const result = await meetupsCollection.find().toArray();
  await client.close();

  return {
    props: {
      meetups: result.map(u => ({
        title: u.title,
        address: u.address,
        image: u.image,
        id: u._id.toString()
      })),
    },
    revalidate: 1,
  };
}
