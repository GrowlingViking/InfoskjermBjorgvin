import { useEffect, useState } from 'react';
import './App.css';
import { useCookies } from 'react-cookie';

function App() {
  const [kystportalPage, setKystportalPage] = useState('');
  const [cookies, setCookies] = useCookies(['ASPSESSIONIDCWDCAQTS=KFKHGOHADPIGHLAIBAECOKCK', 'SameSite=None']);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch('https://public.kystportal.no/ajax/storskjerm/storskjerm.asp?_type=2&_side=3', {
          method: 'GET',
          credentials: 'include'
        })
      ).text();
      setKystportalPage(data);
    };

    dataFetch();
  })

  return (
    <>
      `${kystportalPage}`
    </>
  )
}

export default App
