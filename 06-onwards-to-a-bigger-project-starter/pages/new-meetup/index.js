import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

export default function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch("api/new-meetups", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      throw new Error(e);
    } finally {
      router.push("/");
    }
  }
  return (
    <>
    <Head>
      <title>Add a New Meetup</title>
      <meta name="description" content="Add your own meet up"/>
    </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
