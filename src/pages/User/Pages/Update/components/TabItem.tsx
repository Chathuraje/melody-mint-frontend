import { Tab, TabProps } from "@mui/material";

interface TabItemProps extends TabProps {
  icon: string | React.ReactElement;
  label: string;
}

export const TabItem = (props: TabItemProps) => {
  const { icon, label, ...otherProps } = props;

  return (
    <Tab
      icon={icon}
      label={label}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "left",
        gap: "20px",
      }}
      {...otherProps}
    />
  );
};
