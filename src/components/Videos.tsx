import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: "100%",
        margin: "0 auto",
        width: "100%",
        padding: "40px 20px",
        boxSizing: "border-box",
      },
      mainPos: {
        width: "100%",
      },
      video: {
        marginTop: 24,
        width: "100%",
        "& > iframe": {
          height: 400,
          display: "block",
          width: "100%",
        },
      },
      title: {
        marginBottom: 24,
      },
      videoList: {
        display: "block",
        width: "100%",
      },
      videoLinks: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        overflowY: "auto",
        height: 250,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        "& > li": {
          padding: "12px",
          border: "1px solid #cccccc54",
          backgroundColor: "#fff",
          marginBottom: -1,
          cursor: "pointer",
          "&.active, &:hover": {
            backgroundColor: "#27AE60",
            color: "white",
          },
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "64px 100px 80px",
        boxSizing: "border-box",
      },
      mainPos: {
        width: "100%",
      },
      video: {
        marginTop: 24,
        width: "100%",
        "& > iframe": {
          height: 400,
          display: "block",
          width: "80%",
          margin: "0 auto",
        },
      },
      title: {
        marginBottom: 24,
      },
      videoList: {
        display: "block",
        width: "80%",
        margin: "0 auto",
      },
      videoLinks: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        overflowY: "auto",
        height: 250,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        "& > li": {
          padding: "12px",
          border: "1px solid #cccccc54",
          backgroundColor: "#fff",
          marginBottom: -1,
          cursor: "pointer",
          "&.active, &:hover": {
            backgroundColor: "#27AE60",
            color: "white",
          },
        },
      },
    },
  })
);

const items = [
  {
    id: 0,
    title: "Онлайн-регистрация в StarBusiness для руководителей",
    url: "https://www.youtube.com/embed/bKjk9Yilu6M",
  },
  {
    id: 1,
    title: "Онлайн-регистрация в StarBusiness для сотрудников",
    url: "https://www.youtube.com/embed/xG8akgThqm0",
  },
  {
    id: 2,
    title: "Вход в StarBusiness",
    url: "https://www.youtube.com/embed/GviYN2eeEk0",
  },
  {
    id: 3,
    title: "Счета в StarBusiness",
    url: "https://www.youtube.com/embed/_nszMh552Bo",
  },
  {
    id: 4,
    title: "Выписка в StarBusiness",
    url: "https://www.youtube.com/embed/MyO7IlmG2gI",
  },
];

const Videos = (props: any) => {
  const classes = useStyles({});
  const [video, setVideo] = React.useState<number>(0);

  const setVideoIndex = (index: number) => {
    setVideo(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block className={classes.title}>
          Обучающие видеоролики
        </BccTypography>

        <Grid container className={classes.mainPos} direction="column">
          <Grid item className={classes.video}>
            <iframe
              src={items[video].url}
              frameBorder="0"
              data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
          <Grid item className={classes.videoList}>
            <ul className={classes.videoLinks}>
              {items.map((item: any, index: number) => (
                <li
                  className={index === video ? "active" : ""}
                  onClick={() => setVideoIndex(index)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Videos;
