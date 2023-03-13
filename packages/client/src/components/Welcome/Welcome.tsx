import { trpc } from "../../utils/trpc";

type WelcomeProps = {
  name: string;
};

const Welcome = ({ name }: WelcomeProps) => {
  const { data, isLoading } = trpc.greeting.useQuery({ name });

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <p>
      Hello <code>{data?.text}</code>
    </p>
  );
};

export default Welcome;
