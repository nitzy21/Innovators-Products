import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavBar from "./NavbarFooter/NavBar";
import Footer from "./NavbarFooter/Footer";


import { lazy, Suspense } from "react";
import ViewStory from "./innovator_components/SeeMore/ViewStory";
import ProductDetailsExhibitPage from "./pages/Exhibit/pages/Product-Details-Exhibit-Page/product-details-exhibit-page";
const Payment = lazy(() =>
  import("./product_components/pages/Payment/Payment")
);
//components
const Products = lazy(() => import("./product_components/pages/Products"));
const ProductView = lazy(() =>
  import("./product_components/pages/ProductView/ProductView")
);
const Cart = lazy(() => import("./product_components/pages/Cart/Cart"));
const Checkout = lazy(() =>
  import("./product_components/pages/Checkout/Checkout")
);

const Home = lazy(() => import("./innovator_components/Home"));
const Main = lazy(() => import("./innovator_components/main"));
const ViewMore = lazy(() => import("./innovator_components/SeeMore/ViewStory"));
const InnovationSecondPage = lazy(() =>
  import("./innovation_components/Pages/InnovationSecondPage")
);
const InnovationThirdPage = lazy(() =>
  import("./innovation_components/Pages/InnovationThree")
);
const Create = lazy(() => import("./innovation_components/Pages/Innovation"));
const FAQs = lazy(() => import("./pages/FAQs/FAQs"));
const NewsLetter = lazy(() => import("./pages/Newsletter/Newsletter"));
const NewsLetterView = lazy(() => import("./pages/Newsletter/ViewNewsletter"));
const Library = lazy(() => import("./pages/Library/Library"));
const LibraryView = lazy(() => import("./pages/Library/ViewLibrary"));
const ContactUs = lazy(() => import("./ContactUs/ContactUs"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy/PrivacyPolicy"));
const Login = lazy(() => import("./Login/Login"));

const MainAdmin = lazy(() => import("./admin/components/Main"));
const MainExhibitPage = lazy(() => import("./pages/Exhibit/pages/Main-Exhibit-Page/main-exhibit-page"));
const ProductDetail = lazy(() => import("./pages/Exhibit/pages/Product-Details-Exhibit-Page/product-details-exhibit-page"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div />}>
        {/* <div>
          <NavBar />
        </div> */}

        <Switch>
        <Route path="/" component={MainAdmin} />
          {/* <Route path="/" exact>
            <Redirect to="/products/innovations" />
          </Route>
          <Route path="/login" component={Login}/>
          <Route path="/products/:category" component={Products} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/payment" component={Payment} />
          <Route path="/FAQs" component={FAQs} />
          <Route path="/newsletter" component={NewsLetter} />
          <Route path="/newsletter/:id" component={NewsLetterView} />
          <Route path="/library" component={Library} />
          <Route path="/library/:id" component={LibraryView} />
          <Route path="/innovator" component={Home} />
          <Route
            exact
            path="/innovationSpecific"
            component={InnovationSecondPage}
          />
          <Route
            exact
            path="/innovationInvest"
            component={InnovationThirdPage}
          />

          <Route path="/innovation" component={Create} />
          <Route path="/main" component={Main} />
          <Route path="/ViewStory" component={ViewStory} />
          <Route path="/contactus" component={ContactUs} exact />
          <Route path="/privacy" component={PrivacyPolicy} exact />
          <Route path="/exhibit" component={MainExhibitPage}/>
          <Route path="/exhibit/productdetail" component={ProductDetailsExhibitPage}/> */}
          </Switch>
         <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
