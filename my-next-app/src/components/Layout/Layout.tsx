import React from "react";
import Head from "next/head";
import SideMenu from "@/pages/sidebar";

const Layout = (props: any) => {

  return (
    <>
      <Head>
        <title>NextApp- Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ padding: "0 24px 0 80px", margin: 'auto' }}
      >
        {<SideMenu />}
        {props.children}
      </main>
    </>
  );
};

export default Layout;
