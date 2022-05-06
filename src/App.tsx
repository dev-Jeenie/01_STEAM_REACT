import React from "react";
import "../src/assets/css/main.css";
import "../src/assets/css/main_ver4.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const Container = () => {
  // const match = useLocation();
  // const dispatch = useDispatch();
  // const { principal } = useSelector((s) => s.auth, shallowEqual);
  // const { full } = useSelector((s) => s.menu, shallowEqual);

  // const [loading, setLoading] = useState(true);
  // const isLoading = useSelector((s) => s.loading.isLoading);

  // const [pages, DefPage] = useMemo(() => {
  //   const menus = getAccessibleMenu(full);
  //   const pages = menus
  //     .filter((v) => [Types.C, Types.O].includes(v.type))
  //     .filter((v) => (!!principal && !v.public) || (!principal && v.public));
  //   pages.sort((x, y) => {
  //     const r1 = x.default ? 1 : 0;
  //     const r2 = y.default ? 1 : 0;
  //     return r1 > r2 ? 1 : r1 < r2 ? -1 : 0;
  //   });

  //   let DefPage = undefined;
  //   if (pages.find((x) => !!x.default)) {
  //     DefPage = pages.find((x) => !!x.default).component;
  //   } else if (pages.length > 0) {
  //     DefPage = pages[0].component;
  //   }

  //   return [pages, DefPage];
  // }, [principal, full]);

  // // React.useEffect(async () => {
  // //   const path = location.pathname;
  // //   if (!path) return;
  // //   console.log({pages, path})
  // //   const isAllowed = pages.filter((x) => x.key === path.substring(1))
  // //   console.log({isAllowed})
  // //   if (!!principal && isAllowed.length === 0 && path !== '/') {
  // //     await dispatch(clearPrincipal());
  // //     setToken('');
  // //     history.replace('/')
  // //   }
  // // },[location, principal])

  // const [Layout, currentPage] = useMemo(() => {
  //   let key = match.pathname.substring(1);
  //   if (!pages.find((v) => v.key === key)) {
  //     key = '';
  //   }
  //   const page = pages.find((v) => v.key === key || (v.default && !key));

  //   let LayoutFC = React.Fragment;
  //   if (page) {
  //     if (page.public || !principal || page.key.startsWith('MB_')) {
  //       LayoutFC = AuthLayout;
  //     } else if (page.type === Types.O) {
  //       LayoutFC = PopupLayout;
  //     } else if (page.type === Types.C) {
  //       LayoutFC = BasicLayout;
  //     }
  //   }
  //   return [LayoutFC, page];
  // }, [match.pathname, pages]);

  // const getGUID = async () => {
  //   // const fpPromise = await FingerprintJS.load();
  //   // const result = await fpPromise.get();
  //   const id = md5(clientInformation.userAgent)
  //   localStorage.setItem('guid', id);
  // };

  // useEffect(() => {
  //   const loadData = async () => {
  //     await getGUID();
  //     await dispatch(getCodes());
  //     await dispatch(me());
  //     await dispatch(getMenus());
  //   };
  //   loadData()
  //     .catch(console.warn)
  //     .then(() => setLoading(false));
  // }, []);

  // if (loading) {
  //   return <div>...</div>;
  // }

  return (
    <Router>
      {/* <NavBar /> */}
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/upload" element={<UploadProductPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

function App() {
  return <Container />;
}

export default App;
