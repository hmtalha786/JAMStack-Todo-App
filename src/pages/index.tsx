import * as React from "react";
import Todos from "../components/Todos";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      textAlign: "center",
    },
    parent: {
      textAlign: "center",
    },
  })
);

const IndexPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <title>JamStack Serverless with GraphQL FaunaDB and Netlify</title>
      <h1>Todo App</h1>
      <Todos />
    </div>
  );
};

export default IndexPage;
