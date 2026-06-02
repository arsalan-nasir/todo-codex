declare module "styled-components" {
  import type * as React from "react";

  type Interpolation<Props extends object> =
    | string
    | number
    | ((props: Props) => string | number);

  type StyledComponent<
    ExtraProps extends object,
    ElementProps extends object,
  > = React.FC<
    ExtraProps &
      ElementProps & {
        children?: React.ReactNode;
        className?: string;
      }
  >;

  type StyledTag<ElementProps extends object> = <ExtraProps extends object = {}>(
    strings: TemplateStringsArray,
    ...interpolations: ReadonlyArray<Interpolation<ExtraProps & ElementProps>>
  ) => StyledComponent<ExtraProps, ElementProps>;

  type StyledFactory = {
    article: StyledTag<React.ComponentPropsWithoutRef<"article">>;
    button: StyledTag<React.ComponentPropsWithoutRef<"button">>;
    div: StyledTag<React.ComponentPropsWithoutRef<"div">>;
    form: StyledTag<React.ComponentPropsWithoutRef<"form">>;
    h1: StyledTag<React.ComponentPropsWithoutRef<"h1">>;
    h2: StyledTag<React.ComponentPropsWithoutRef<"h2">>;
    h3: StyledTag<React.ComponentPropsWithoutRef<"h3">>;
    input: StyledTag<React.ComponentPropsWithoutRef<"input">>;
    label: StyledTag<React.ComponentPropsWithoutRef<"label">>;
    main: StyledTag<React.ComponentPropsWithoutRef<"main">>;
    p: StyledTag<React.ComponentPropsWithoutRef<"p">>;
    section: StyledTag<React.ComponentPropsWithoutRef<"section">>;
    span: StyledTag<React.ComponentPropsWithoutRef<"span">>;
  };

  const styled: StyledFactory;

  export const createGlobalStyle: (
    strings: TemplateStringsArray,
    ...interpolations: ReadonlyArray<string | number>
  ) => React.FC;

  export default styled;
}
