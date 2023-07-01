// Libraries
import { FC, useContext } from "react";

// Components
import { Button } from "ui/Button";

// Context
import { AuthContext } from "pages/_app";

export const DescriptionForDevelopers: FC = () => {
  const { isRegistered } = useContext(AuthContext);
  return (
    <div className="flex relative justify-center items-center px-4 py-10 min-h-[500px] lg:min-h-[650px] w-full">
      <img src="background.webp" className="absolute flex w-full h-full z-0" />
      <div className="md:max-w-[380px] z-10 flex flex-col">
        <h1 className="mb-[21px] text-center text-white text-[40px] leading-10">
          Test assignment for front-end developer
        </h1>
        <p className="mb-8 text-white text-center">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as theyll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        {!isRegistered && (
          <a href="#registerForm">
            <Button className="flex mx-auto" styles="primary">
              Sign up
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};
