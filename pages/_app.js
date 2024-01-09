import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {SessionProvider} from "next-auth/react";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import Preloader from "../components/Preloader";

export default function App({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay time as needed
    }, []);

    if (isLoading) {
        return <Preloader />;
    }
  return(
      <>
          <SessionProvider session={pageProps.session}>
              <Navbar/>
              <Component {...pageProps} />
              <Footer/>
          </SessionProvider>
      </>
      )
}
