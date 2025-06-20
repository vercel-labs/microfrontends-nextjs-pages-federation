// App import is a workaround to load the app global styles
// which are only allowed to be imported in the remote _app
import NavigationApp from 'navigation/app';
import Header from 'navigation/header';
import Footer from 'navigation/footer';
import Page from 'content/page';
import ContentApp from 'content/app';

export default function Home() {
  return (
    <>
      <NavigationApp Component={Header} />
      <ContentApp Component={Page} />
      <NavigationApp Component={Footer} />
    </>
  );
}

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
