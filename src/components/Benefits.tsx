import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#FFFFFF",
      },
      innerContainer: {
        maxWidth: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 20px",
      },
      title: {
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 28,
        color: "#141414",
        marginBottom: 40,
      },
      item: {
        background: "#FFFFFF",
        width: "100%",
        minHeight: 190,
        marginBottom: 30,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px",
      },
      itemImg: {
        marginRight: 10,
        width: "100%",
        "& > img": {
          height: 60,
          width: 60,
        },
      },
      itemImgTitle: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 24,
        color: "#141414",
        marginBottom: 10,
      },
      itemDesc: {
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontSize: 16,
        color: "#141414",
        opacity: 0.7,
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#FFFFFF",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "64px 100px 50px",
      },
      title: {
        marginBottom: 40,
      },
      item: {
        background: "#FFFFFF",
        width: "calc(50% - 15px)",
        minHeight: 190,
        marginBottom: 30,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px",
      },
      itemImg: {
        marginRight: 10,
        "& > img": {
          height: 60,
          width: 60,
        },
      },
      itemImgTitle: {
        alignSelf: "center",
      },
      itemDesc: {
        marginTop: 10,
      },
    },
  })
);

const items = [
  {
    title: "Банк там, где Вы",
    desc:
      "Управляйте своими денежными средствами, оплачивайте все виды услуг, совершайте переводы между счетами, получайте информацию об операциях по Вашим счетам везде, где есть интернет",
    img: "/icons/phone.svg",
  },
  {
    title: "Цифровизация",
    desc: "Онлайн–открытие второго и последующих счетов",
    img: "/icons/digital.svg",
  },
  {
    title: "Удобный интерфейс",
    desc: "Приятный адаптивный кросс-браузерный дизайн для удобства работы",
    img: "/icons/internet.svg",
  },
  {
    title: "1С Direct Banking",
    desc:
      "Ускоряйте документооборот между системамибез использования файлового обмена",
    img: "/icons/online.svg",
  },
];

const Banner = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block className={classes.title}>
          Преимущества
        </BccTypography>
        <Grid container justify="space-between" direction="row">
          {items.map((i: any) => (
            <Grid item className={classes.item}>
              <Grid container>
                <Grid item className={classes.itemImg}>
                  <img src={process.env.PUBLIC_URL + i.img} />
                </Grid>
                <Grid item className={classes.itemImgTitle}>
                  <BccTypography type="h4" block weight="bold">
                    {i.title}
                  </BccTypography>
                </Grid>
              </Grid>
              <BccTypography type="p2" block className={classes.itemDesc}>
                {i.desc}
              </BccTypography>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Banner;
