import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        background: `url(${process.env.PUBLIC_URL +
          "/banner_m.jpg"}) no-repeat`,
        backgroundSize: "cover",
        backgroundPositionY: "center",
      },
      innerContainer: {
        position: "relative",
        maxWidth: "100%",
        margin: "0 auto",
        width: "100%",
        padding: "240px 20px 50px",
        boxSizing: "border-box",
      },
      title: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 28,
        lineHeight: 1,
        marginBottom: 15,
      },
      subTitle: {
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontSize: 16,
        color: "#5B5B5B",
      },
      openBtn: {
        width: "100%",
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "500",
        marginTop: 50,
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        background: `url(${process.env.PUBLIC_URL + "/banner.jpg"}) no-repeat`,
        backgroundSize: "cover",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "130px 100px 110px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 24,
      },
      subTitle: {
        marginBottom: 24,
        opacity: 0.7,
      },
      openBtn: { minWidth: 250, fontSize: 16 },
    },
    title: {
      color: "#fff",
    },
    subTitle: {
      color: "#fff",
    },
  })
);

const Banner = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h1" block className={classes.title} weight="bold">
          Starbusiness
          <br />
          для Вашего бизнеса
        </BccTypography>
        <BccTypography
          type="h3"
          weight="normal"
          block
          className={classes.subTitle}
        >
          Онлайн. Без посещений в банк.
        </BccTypography>
        <BccButton
          className={classes.openBtn}
          variant="contained"
          color="primary"
          onClick={() => props.openModal()}
        >
          Стать клиентом
        </BccButton>
      </div>
    </div>
  );
};

export default Banner;
