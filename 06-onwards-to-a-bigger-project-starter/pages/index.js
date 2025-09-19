import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../lib/DUMMY_VALUES";

export default function HomePage(props) {
//   const [loadedMeetups, setLoadedMeetups] = useState([]);

//   useEffect(() => {
//     setLoadedMeetups(DUMMY_MEETUPS);
//   }, []);
  return (
    <>
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
    // fetch data API
   return {
     props: {
        meetups: DUMMY_MEETUPS
     },
     revalidate: 1
   }
}