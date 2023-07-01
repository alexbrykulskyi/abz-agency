// Components
import { Users } from "./components/Users";
import { RegistrationForm } from "./components/RegistrationForm";
import { DescriptionForDevelopers } from "./components/DescriptionForDevelopers";

// Layouts
import { Header } from "./layouts/Header";
import { Wrapper } from "./layouts/Wrapper";
import { Container } from "./layouts/Container";

// Hooks
import { useUsers } from "./hooks/useUsers";

export const Main = () => {
  const { users, showMore, updateUsersList, isLoading, isHasNextPage } =
    useUsers();
  return (
    <Container>
      <Header />
      <DescriptionForDevelopers />
      <Wrapper>
        <Users
          users={users}
          showMore={showMore}
          isLoading={isLoading}
          isHasNextPage={isHasNextPage}
        />
        <RegistrationForm updateUsersList={updateUsersList} />
      </Wrapper>
    </Container>
  );
};
