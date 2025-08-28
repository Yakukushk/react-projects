import { Heading, List, ListItem, Text } from "../assets/tailwind-classes";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <>
      <section>
        <Heading>New Tasks</Heading>
        <NewTask onAddTask={onAdd} />

        <List>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <ListItem key={task.taskId}>
                <Heading level={2}>{task.text}</Heading>
                <button onClick={() => onDelete(task.taskId)}>&#10006;</button>
              </ListItem>
            ))
          ) : (
            <p>This project does not have any task yet</p>
          )}
        </List>
      </section>
    </>
  );
}
