import * as React from "react";

import { UseCase, UseCaseDegree, useCaseData } from "data/usecase";

import DialogImage from "components/Image/DialogImage";
import DivImage from "components/Image/DivImage";
import { DivProps } from "types";

type UseCaseCardProps = {
  degree: UseCaseDegree;
} & DivProps;

const UseCaseCard: React.FC<UseCaseCardProps> = ({ degree, className, ...props }) => {
  const usecase: UseCase = useCaseData.find((e: UseCase) => e.degree === degree)!;

  return (
    <div className="w-72">
      {/* <--- Worries --- */}
      <div className="border-black border-2 rounded relative">
        <div className="balloon-callout">{usecase.degree_ja}</div>
        <div className="flex w-full object-center">
          <DivImage src={usecase.src_worry} alt={usecase.worries} className="w-48 h-32 mx-auto" />
        </div>
        <div className="px-8 text-base font-bold py-6">{usecase.worries}</div>
      </div>
      {/* --- END Worries ---> */}

      {/* <--- Arrows --- */}
      <div className="arrow py-4">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* --- END Arrows ---> */}

      {/* <--- Solutions --- */}
      <div className="bg-winered-light text-white rounded">
        <div className="mx-10 text-sm font-bold py-6">{usecase.solution}</div>
        <div className="flex w-full object-center pb-6">
          <DialogImage
            src={usecase.src_screen}
            alt={usecase.solution}
            className={"w-60 h-32 mx-auto"}
          />
        </div>
      </div>
      {/* --- END Solutions  ---> */}
    </div>
  );
};

export default UseCaseCard;
