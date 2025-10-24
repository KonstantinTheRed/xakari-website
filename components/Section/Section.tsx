import Styles from "./styles.module.css";

interface SectionProps {
  flow: "row" | "column" | undefined;
  name: string;
  height: string;
  width?: string;
  children?: React.ReactNode;
  centered?: boolean;
}

export default function Section(props: SectionProps) {
  return (
    <section
      className={Styles.container}
      id={props.name}
      style={{
        flexDirection: props.flow || "row",
        height: props.height,
        justifyContent: props.centered ? "center" : "",
        alignItems: props.centered ? "center" : "",
      }}
    >
      {props.children}
    </section>
  );
}
