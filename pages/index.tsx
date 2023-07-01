// Pages
import { Main } from "../modules/main";

// Api
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

export default Main;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  return {
    props: {
      queryDehydratedState: dehydrate(queryClient),
    },
  };
}
