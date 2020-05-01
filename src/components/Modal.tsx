import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { BccTypography, BccButton } from "./BccComponents";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#fafafa",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "0 20px",
        boxSizing: "border-box",
      },
      text: {},
      date: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "normal",
        color: "#5B5B5B",
        opacity: 0.7,
        marginBottom: 20,
      },
      fixedModal: {
        display: "none",
        position: "fixed",
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 1,
        transition: ".3s",
      },
      open: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        transition: ".3s",
      },
      modalClose: {
        position: "relative",
        width: "90%",
        padding: "20px 0px",
        background: "white",
        zIndex: 1000,
        borderRadius: 8,
      },
      fixedBtnModal: {
        position: "absolute",
        margin: "auto",
        right: 0,
        zIndex: 1001,
        top: 0,
        "&:hover": {
          backgroundColor: "inherit",
          color: "#27AE60",
        },
      },
      modalMain: {
        zIndex: 1000,
        background: "white",
        position: "relative",
        padding: "10px 20px",
        overflowY: "auto",
        overflowX: "hidden",
      },
      notScroll: {
        overflow: "hidden",
      },
      modalTitle: {
        width: "100%",
        "& h3": {
          marginTop: 0,
          fontSize: 24,
          color: "#141414",
        },
        "& p": {
          margin: "8px 0 16px 0",
        },
        "& h4": {
          fontSize: 14,
          margin: "0",
        },
      },
      drpBack: {
        width: "100%",
        height: "100%",
        background: "#00000099",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
        cursor: "pointer",
      },

      scroll: {
        maxHeight: 400,
        overflowY: "scroll",
      },
      mainTitle: {
        marginBottom: 30,
      },
      subTitle: {
        marginBottom: 24,
      },
      mobileTitle: { display: "none" },
      mobileLinks: {
        marginRight: 36,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            width: 120,
            display: "block",
          },
        },
      },
      qr: {
        "& > img": {
          height: "100%",
        },
      },
      call: {
        marginTop: 24,
        marginRight: 10,
        opacity: 0.7,
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#fafafa",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "0 100px",
        boxSizing: "border-box",
      },
      text: {},
      date: { opacity: 0.7, marginBottom: 20 },
      fixedModal: {
        display: "none",
        position: "fixed",
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 1,
        transition: ".3s",
      },
      open: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 100,
        transition: ".3s",
      },
      modalClose: {
        position: "relative",
        width: "75%",
        padding: "48px 0px",
        marginTop: 100,
        background: "white",
        zIndex: 1000,
        borderRadius: 8,
      },
      fixedBtnModal: {
        position: "absolute",
        margin: "auto",
        right: 0,
        zIndex: 1001,
        top: 0,
        "&:hover": {
          backgroundColor: "inherit",
          color: "#27AE60",
        },
      },
      modalMain: {
        zIndex: 1000,
        background: "white",
        position: "relative",
        padding: "60px 90px",
        overflowY: "auto",
        overflowX: "hidden",
      },
      notScroll: {
        overflow: "hidden",
      },
      modalTitle: {
        width: "calc(65% - 40px)",
        "& h3": {
          marginTop: 0,
          fontSize: 24,
          color: "#141414",
        },
        "& p": {
          margin: "8px 0 16px 0",
        },
        "& h4": {
          fontSize: 14,
          margin: "0",
        },
      },
      drpBack: {
        width: "100%",
        height: "100%",
        background: "#00000099",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
        cursor: "pointer",
      },

      scroll: {
        maxHeight: 400,
        overflowY: "scroll",
      },
      mainTitle: {
        marginBottom: 30,
      },
      subTitle: {
        marginBottom: 24,
      },
      mobileTitle: {
        width: "calc(35% - 40px)",
        textAlign: "right",
        "& > img": {
          maxHeight: 400,
        },
      },
      mobileLinks: {
        marginRight: 36,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            width: 120,
            display: "block",
          },
        },
      },
      qr: {
        "& > img": {
          height: "100%",
        },
      },
      call: {
        marginTop: 24,
        marginRight: 10,
        opacity: 0.7,
      },
    },
  })
);

const Icon = withStyles({})((props: any) => (
  <IconButton {...props} disableFocusRipple disableRipple disableTouchRipple />
));

const Modal = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <Grid className={`${classes.fixedModal} ${classes.open}`}>
          <Grid className={classes.modalClose}>
            <Icon
              className={classes.fixedBtnModal}
              onClick={() => props.closeModal()}
            >
              <CloseIcon />
            </Icon>
            <Grid
              container
              className={`${classes.modalMain} ${classes.notScroll}`}
              direction="row"
              justify="space-between"
            >
              <Grid item className={classes.modalTitle}>
                <BccTypography type="h2" block className={classes.mainTitle}>
                  StarBusiness
                </BccTypography>
                <BccTypography type="h4" block className={classes.subTitle}>
                  Установите мобильное приложении «StarBusiness»
                </BccTypography>
                <BccTypography type="p2l" block className={classes.subTitle}>
                  Чтобы стать клиентом зарегистрируйтесь с помощью мобильного
                  приложения банка
                </BccTypography>
                <Grid
                  container
                  justify="flex-start"
                  direction="row"
                  wrap="nowrap"
                  className={classes.mobile}
                >
                  <Grid item className={classes.mobileLinks}>
                    <a
                      href="https://apps.apple.com/kz/app/starbusiness/id1452748006"
                      target="_blank"
                    >
                      <img src={process.env.PUBLIC_URL + "/as.svg"} />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=bcc.sapphire&hl=ru"
                      target="_blank"
                    >
                      <img src={process.env.PUBLIC_URL + "/gp.svg"} />
                    </a>
                  </Grid>
                  <Grid item className={classes.qr}>
                    <img src={process.env.PUBLIC_URL + "/qr.svg"} />
                  </Grid>
                </Grid>
                <BccTypography type="p2" className={classes.call}>
                  Служба поддержки
                </BccTypography>
                <BccTypography type="p2" weight="bold">
                  605
                </BccTypography>
              </Grid>
              <Grid item className={classes.mobileTitle}>
                <img src={process.env.PUBLIC_URL + "/mobile.png"} />
              </Grid>
            </Grid>
          </Grid>
          <div
            className={classes.drpBack}
            onClick={() => props.closeModal()}
          ></div>
        </Grid>
      </div>
    </div>
  );
};

export default Modal;
