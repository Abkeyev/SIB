import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccButton,
  BccTabs,
  BccTab,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#fafafa",
      },
      innerContainer: {
        maxWidth: "100%",
        margin: "0 auto",
        width: "100%",
        padding: "40px 20px",
        boxSizing: "border-box",
      },
      title: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 28,
        color: "#141414",
        marginBottom: 40,
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        color: "#000D1A",
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
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
        padding: "40px 100px 60px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 40,
        textAlign: "center",
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
  })
);

const items = [
  {
    title: "Инструкции",
    content: `<span>•</span> Об Интернет-Банкинге на bcc.kz<br/><br/>
    <span>•</span> Инструкция по настройке работы с 1С<br/><br/>
    <span>•</span> Руководство Пользователя по регистрации ЭЦП НУЦ в СИБ<br/><br/>
    <span>•</span> Ещё`,
  },
  {
    title: "Программы",
    content: `<span>•</span> Программы Интернет-Банкинге на bcc.kz<br/><br/>
    <span>•</span> Инструкция по настройке работы с 1С<br/><br/>
    <span>•</span> Руководство Пользователя по регистрации ЭЦП НУЦ в СИБ<br/><br/>
    <span>•</span> Ещё`,
  },
  {
    title: "Презентации",
    content: `<span>•</span> Презентации Интернет-Банкинге на bcc.kz<br/><br/>
    <span>•</span> Инструкция по настройке работы с 1С<br/><br/>
    <span>•</span> Руководство Пользователя по регистрации ЭЦП НУЦ в СИБ<br/><br/>
    <span>•</span> Ещё`,
  },
  {
    title: "Документы для подключения",
    content: `<span>•</span> Документы Интернет-Банкинге на bcc.kz<br/><br/>
    <span>•</span> Инструкция по настройке работы с 1С<br/><br/>
    <span>•</span> Руководство Пользователя по регистрации ЭЦП НУЦ в СИБ<br/><br/>
    <span>•</span> Ещё`,
  },
  {
    title: "Тарифы",
    content: `<span>•</span> Тарифы Интернет-Банкинге на bcc.kz<br/><br/>
    <span>•</span> Инструкция по настройке работы с 1С<br/><br/>
    <span>•</span> Руководство Пользователя по регистрации ЭЦП НУЦ в СИБ<br/><br/>
    <span>•</span> Ещё`,
  },
];

const Useful = (props: any) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block className={classes.title}>
          Полезное
        </BccTypography>

        <BccTabs
          value={index}
          onChange={(e: any, i: number) => setIndex(i)}
          className={classes.tab}
        >
          {items &&
            items.map((item: any) => {
              return <BccTab label={item.title} />;
            })}
        </BccTabs>
        <div
          className={classes.tabs}
          dangerouslySetInnerHTML={{ __html: items[index].content }}
        />
      </div>
    </div>
  );
};

export default Useful;
