import { useSearchParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import ViewUser from "./ViewUser";
import ViewError from "./ViewError";
import ViewLoader from "./ViewLoader";

export default function Widget() {
  const [URLSearchParams] = useSearchParams();
  const githubUserName = URLSearchParams.get("github_username");

  const { data, isPending, error } = useQuery({
    queryKey: ['user', githubUserName],
    queryFn: () => fetch(`https://api.github.com/users/${githubUserName}`).then(r => r.json()),
  });

  if (!githubUserName) {
    return (
      <ViewError
        title="Missing GitHub Username"
        description="Please provide GitHub Username parameter."
        help="?github_username=USERNAME"
      />
    );
  }

  if (error) {
    return (
      <ViewError
        title="Fetch Error"
        description={error.message}
        help="Ensure the github_username is correct."
      />
    );
  }

  if (isPending) {
    return <ViewLoader />
  }

  if (!data) {
    return (
      <ViewError
        title="No user found"
        description="The data source returned no user."
        help="Ensure the github_username is correct."
      />
    );
  }

  return (<ViewUser user={data} />);
}
