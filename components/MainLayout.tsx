import Head from "next/head";
import Link from "next/link";

import styles from "../styles/index.module.css";

const MainLayout = ({ children, title = "Next app" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Blogs, posts,friend,comments" />
        <meta name="description" content="this my test task" />
      </Head>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.layout__items}>Latest Layout</a>
        </Link>

        <Link href="/posts/new">
          <a className={styles.layout__items}>Create Post</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
