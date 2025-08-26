import { Heading, List, ListItem } from "../assets/tailwind-classes";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <>
      <section>
        <Heading>New Tasks</Heading>
        <NewTask onAddTask={onAdd} />
        <p>This project does not have any task yet</p>
        <List>
          {tasks.map((task) => (
            <ListItem key={task.taskId}>{task.text}</ListItem>
          ))}
        </List>
      </section>
    </>
  );
}
