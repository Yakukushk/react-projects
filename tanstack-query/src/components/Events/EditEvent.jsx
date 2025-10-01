import { Link, redirect, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  // const submit = useSubmit();
  const params = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
    queryKey: ["events", params.id],
  });
  const {
    mutate,
    isPending: isUpdateLoading,
    isError: isErrorUpdate,
    error: errorUpdate,
  } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["events", params.id] });
      const previousEvent = queryClient.getQueryData(["events", params.id]);
      queryClient.setQueryData(["events", params.id], data.event);

      return { previousEvent };
    },
    onError: (error, data, context) => {
      queryClient.setQueriesData(["events", params.id], context.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['events', params.id]);
    }
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    // submit(formData, {method: 'PUT'});
  }

  function handleClose() {
    navigate("../");
  }

  let content;
  if (isLoading) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock title={error.name} message={error.message} />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data)
    [
      (content = (
        <>
          <EventForm inputData={data} onSubmit={handleSubmit}>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            {isUpdateLoading && <h3>Submitting...</h3>}
            {!isUpdateLoading && (
              <button type="submit" className="button">
                Update
              </button>
            )}
            {isErrorUpdate && (
              <ErrorBlock
                title={errorUpdate.name}
                message={errorUpdate.message}
              />
            )}
          </EventForm>
        </>
      )),
    ];

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({params}) {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({signal, id: params.id})
  });
}

export async function action({request, params}) {
  const formData = await request.formData;
  console.log(formData);
  const updateFormData = Object.fromEntries(formData); 
  await updateEvent({id: params.id, event: updateFormData });
  await queryClient.invalidateQueries({queryKey: ['events', params.id]});
  return redirect('/');
}