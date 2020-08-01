import Head from "next/head";
import { createUseStyles } from "react-jss";
import PageLayout from "../components/PageLayout";

const useStyles = createUseStyles({
  squares: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  orangeSquare: {
    width: "45vw",
    height: "45vw",
    backgroundColor: "#F66717",
    margin: {
      top: "8vh",
      bottom: "3vh",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  darkOrangeSquare: {
    backgroundColor: "#E05A0F",
    width: "35vw",
    height: "35vw",
    marginBottom: "3vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  redSquare: {
    width: "25vw",
    height: "25vw",
    backgroundColor: "#F0450F",
    marginBottom: "3vh",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>SPARK: A Torch Mentorship Program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <div className={classes.squares}>
          <div className={classes.orangeSquare}>
            <div className={classes.darkOrangeSquare}>
              <div className={classes.redSquare} />
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
