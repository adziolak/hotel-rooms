import Header from "components/Header";
import Footer from "components/Footer";
import Testimonial from "components/Testimonial";
import Metric from "components/Metric";
import RecentArticles from "features/articles";
import BookingRoom from "features/booking-room";
import IconMapMarker from "icons/IconMapMarker";
import IconHeart from "icons/IconHeart";
import IconWallet from "icons/IconWallet";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen flex flex-col layout">  
        <Header />

        <main className="flex-grow flex flex-col">
          <BookingRoom />            

          <section className="mx-auto max-w-7xl container px-6">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16 mx-auto">
                <Testimonial icon={<IconMapMarker />} title="Find the perfect rental">
                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in
                </Testimonial>
                <Testimonial icon={<IconWallet />} title="Book with confidence">
                    The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit
                </Testimonial>
                <Testimonial icon={<IconHeart />} title="Enjoy your vacation">
                    His room, a proper human room although a little too small, lay peacefully between its four familiar
                </Testimonial>
              </div>
          </section>

          <RecentArticles />

          <div className="bg-white mt-6 lg:mb-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <Metric title="Happy Clients" counter={15623} />
                <Metric title="Trips Completed" counter={8421} />
                <Metric title="Awards Won" counter={15} />
              </div>
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App; 
