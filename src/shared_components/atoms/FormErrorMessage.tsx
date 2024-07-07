import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

export type FormErrorMessageProps = PropsWithChildren & {
  className?: string;
};

const FormErrorMessage: FC<FormErrorMessageProps> = ({
  children,
  className
}) => {
  return (
    <p
      className={classNames(
        "font-serif text-sm text-left block text-red-600",
        className
      )}
    >
      {children}
    </p>
  );
};

export default FormErrorMessage;
