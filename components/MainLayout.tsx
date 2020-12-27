import Head from "next/head";
import Link from "next/link";

const MainLayout = ({ children, title = "Next app" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="next, javascript,react,SSR" />
        <meta name="description" content="this my test task" />
      </Head>
      <nav>
        <Link href="/">
          <a>Latest Layout</a>
        </Link>

        <Link href="/posts/new">
          <a>Create Post</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          background: #fdfdfd;
          top: 0;
          left: 0;
          right: 0;

          displat: flex;
          justify-content: space-around;
        }
        main {
          margin-top: 80px;
        }
      `}</style>
    </>
  );
};

export default MainLayout;
