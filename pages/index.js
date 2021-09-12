import Head from "next/head";
import { Fragment } from "react";
import Main from "../components/Main";

import queryMongo from "./api/lib/mongo";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>TJFácil</title>
        <meta
          name="description"
          content="Encontre o site do Tribunal que precisa em segundos!"
        />
      </Head>
      <Main courtData={props.courts} />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const courtData = await queryMongo("courts", {});
  return {
    props: {
      courts: courtData.map((court) => ({
        id: court.id,
        code: court.code,
        abbr: court.abbr,
        name: court.name,
        mainPage: court.mainPage,
        search: {
          first: {
            physical: court.firstPhysicalSearchPage,
            electronic: court.firstElectronicSearchPage,
          },
          second: {
            physical: court.secondPhysicalSearchPage,
            electronic: court.secondElectronicSearchPage,
          },
        },
      })),
    },
  };
};
