import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  height: 60px;
  background: #fdfdfd;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
`;
const Main = styled.nav`
  margin-top: 80px;
`;
const LinkCSS = styled.div`
  margin-left: 80px;
  font-size: 26px;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.4s;
  &:hover {
    color: green;
    transition: 0.4s;
  }
`;

const MainLayout = ({ children, title = "Next app" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="next, javascript,react,SSR" />
        <meta name="description" content="this my test task" />
      </Head>
      <Nav>
        <Link href="/">
          <LinkCSS>
            <a>Latest Layout</a>
          </LinkCSS>
        </Link>

        <Link href="/posts/new">
          <LinkCSS>
            <a>Create Post</a>
          </LinkCSS>
        </Link>
      </Nav>
      <Main>{children}</Main>
    </>
  );
};

export default MainLayout;
